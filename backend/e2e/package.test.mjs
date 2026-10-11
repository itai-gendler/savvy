import assert from "node:assert/strict";
import { test } from "node:test";
import {
  mkdtemp,
  mkdir,
  cp,
  symlink,
  readFile,
  rm,
  writeFile,
  chmod,
  access,
} from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "node:net";
import { once } from "node:events";
import { spawn, execFile } from "node:child_process";
import { promisify } from "node:util";
import { randomBytes, createHash } from "node:crypto";

const root = fileURLToPath(new URL("../../", import.meta.url));
const run = promisify(execFile);

test("scheduled backup recovers failures without starting an inactive backend", async (t) => {
  const script = join(root, "deploy/savvy-backup.sh");
  for (const scenario of [
    "inactive",
    "success",
    "stop-failure",
    "backup-failure",
    "restart-failure",
    "killed",
  ]) {
    await t.test(scenario, { timeout: 10000 }, async () => {
      const directory = await mkdtemp(join(tmpdir(), "savvy-backup-job-"));
      let child;
      try {
        const bin = join(directory, "bin");
        await mkdir(bin);
        const env = {
          ...process.env,
          PATH: bin + ":" + process.env.PATH,
          RUNTIME_DIRECTORY: directory,
          SAVVY_TEST_DIRECTORY: directory,
          SAVVY_TEST_FAILURE: scenario,
        };
        await writeFile(
          join(directory, "backend-state"),
          scenario === "inactive" ? "stopped" : "running",
        );
        for (const [name, body] of [
          [
            "systemctl",
            `
const command=process.argv[2];
if(!process.argv.includes('savvy-backend.service')) process.exit(99);
const state=join(directory,'backend-state');
if(command==='is-active') process.exit(readFileSync(state,'utf8')==='running'?0:3);
if(command==='stop') {writeFileSync(state,'stopped'); if(failure==='stop-failure') process.exit(1);}
else if(command==='start') {if(failure==='restart-failure') process.exit(1); writeFileSync(state,'running');}
else process.exit(99);
`,
          ],
          [
            "runuser",
            `
if(readFileSync(join(directory,'backend-state'),'utf8')!=='stopped') process.exit(99);
writeFileSync(join(directory,'backup-attempted'),'yes');
if(failure==='backup-failure') process.exit(23);
if(failure==='killed') setInterval(()=>{},1000);
else writeFileSync(join(directory,'backup-completed'),'yes');
`,
          ],
        ]) {
          const path = join(bin, name);
          await writeFile(
            path,
            `#!${process.execPath}\nconst {readFileSync,writeFileSync}=require('node:fs');\nconst {join}=require('node:path');\nconst directory=process.env.SAVVY_TEST_DIRECTORY,failure=process.env.SAVVY_TEST_FAILURE;\n${body}`,
          );
          await chmod(path, 0o700);
        }
        if (scenario === "killed") {
          child = spawn("sh", [script, "backup"], {
            env,
            detached: true,
            stdio: "ignore",
          });
          const exited = once(child, "exit");
          for (
            let attempt = 0;
            !(await access(join(directory, "backup-attempted")).then(
              () => true,
              () => false,
            ));
            attempt++
          ) {
            assert.ok(attempt < 100, "backup process must become active");
            await new Promise((resolve) => setTimeout(resolve, 20));
          }
          process.kill(-child.pid, "SIGKILL");
          assert.deepEqual(await exited, [null, "SIGKILL"]);
        } else if (
          ["inactive", "stop-failure", "backup-failure"].includes(scenario)
        ) {
          await assert.rejects(run("sh", [script, "backup"], { env }));
        } else {
          await run("sh", [script, "backup"], { env });
        }
        if (scenario === "restart-failure") {
          await assert.rejects(run("sh", [script, "restart"], { env }));
          assert.equal(
            await readFile(join(directory, "backend-state"), "utf8"),
            "stopped",
          );
          await access(join(directory, "restart-required"));
          env.SAVVY_TEST_FAILURE = "";
        }
        await run("sh", [script, "restart"], { env });
        assert.equal(
          await readFile(join(directory, "backend-state"), "utf8"),
          scenario === "inactive" ? "stopped" : "running",
        );
        await assert.rejects(access(join(directory, "restart-required")));
        const completed = await access(
          join(directory, "backup-completed"),
        ).then(
          () => true,
          () => false,
        );
        assert.equal(
          completed,
          ["success", "restart-failure"].includes(scenario),
        );
        if (["inactive", "stop-failure"].includes(scenario))
          await assert.rejects(access(join(directory, "backup-attempted")));
      } finally {
        if (child && child.exitCode === null && child.signalCode === null) {
          process.kill(-child.pid, "SIGKILL");
          await once(child, "exit");
        }
        await rm(directory, { recursive: true, force: true });
      }
    });
  }
});

test(
  "compiled release migrates, serves both APIs, drains and backs up without TypeScript source",
  { timeout: 30000 },
  async () => {
    const directory = await mkdtemp(join(tmpdir(), "savvy-release-"));
    let child;
    try {
      const backend = join(directory, "backend");
      await mkdir(backend);
      for (const file of ["build", "dist", "package.json"])
        await cp(join(root, "backend", file), join(backend, file), {
          recursive: true,
        });
      await mkdir(join(directory, "config"));
      await cp(
        join(root, "config/managed-catalog.json"),
        join(directory, "config/managed-catalog.json"),
      );
      // Reuse this host's installed native dependencies; no source is copied.
      await symlink(
        join(root, "backend/node_modules"),
        join(backend, "node_modules"),
      );
      const alias = join(directory, "staging");
      await symlink(backend, alias);
      const portProbe = createServer();
      portProbe.listen(0, "127.0.0.1");
      await once(portProbe, "listening");
      const port = portProbe.address().port;
      await new Promise((resolve) => portProbe.close(resolve));
      const origin = `http://127.0.0.1:${port}`;
      const env = {
        PATH: process.env.PATH,
        PORT: String(port),
        SAVVY_HOST: "127.0.0.1",
        BETTER_AUTH_URL: origin,
        SAVVY_OIDC_ISSUER: origin,
        BETTER_AUTH_SECRET: randomBytes(32).toString("hex"),
        SAVVY_AUTH_DATABASE: join(directory, "auth.sqlite"),
        SAVVY_DB_PATH: join(directory, "service.sqlite"),
        SAVVY_ANTHROPIC_API_KEY: "synthetic",
        SAVVY_DEEPGRAM_API_KEY: "synthetic",
        SAVVY_STRIPE_SECRET_KEY: "synthetic",
        SAVVY_STRIPE_WEBHOOK_SECRET: "synthetic",
        SAVVY_STRIPE_PRICE_MONTHLY: "price_monthly",
        SAVVY_STRIPE_PRICE_PACK: "price_pack",
        SAVVY_ANTHROPIC_BASE_URL: origin,
        SAVVY_DEEPGRAM_URL: origin.replace("http:", "ws:"),
        SAVVY_STRIPE_BASE_URL: origin,
        SAVVY_CHECKOUT_RETURN_URL: origin + "/complete",
      };
      const options = { cwd: backend, env, timeout: 10000 };
      await run(process.execPath, [join(alias, "build/migrate.js")], options);
      child = spawn(process.execPath, ["build/server.js"], {
        cwd: backend,
        env,
        stdio: "ignore",
      });
      const exited = once(child, "exit");
      let ready = false;
      for (let attempt = 0; attempt < 100; attempt++) {
        assert.equal(child.exitCode, null, "release must remain running");
        ready = await fetch(origin + "/readyz")
          .then((r) => r.status === 204)
          .catch(() => false);
        if (ready) break;
        await new Promise((resolve) => setTimeout(resolve, 50));
      }
      assert.ok(ready);
      assert.equal((await fetch(origin + "/ready")).status, 200);
      assert.equal((await fetch(origin + "/v1/account")).status, 401);
      const page = await fetch(origin + "/sign-in");
      assert.equal(page.status, 200);
      const html = await page.text();
      const asset = html.match(/src="(\/assets\/[^" ]+\.js)"/);
      assert.ok(asset, "release must include its browser bundle");
      assert.equal((await fetch(origin + asset[1])).status, 200);
      child.kill("SIGINT");
      assert.deepEqual(await exited, [0, null]);
      const backup = join(directory, "snapshot");
      await run(
        process.execPath,
        [join(alias, "build/backup.js"), backup],
        options,
      );
      const manifest = JSON.parse(
        await readFile(join(backup, "manifest.json"), "utf8"),
      );
      assert.deepEqual(
        manifest.files.map((f) => f.role),
        ["auth", "service"],
      );
      for (const file of manifest.files) {
        const bytes = await readFile(join(backup, file.file));
        assert.equal(bytes.length, file.bytes);
        assert.equal(
          createHash("sha256").update(bytes).digest("hex"),
          file.sha256,
        );
      }
      await assert.rejects(
        run(
          process.execPath,
          [join(alias, "build/backup.js"), backup],
          options,
        ),
      );
    } finally {
      if (child && child.exitCode === null && child.signalCode === null) {
        child.kill("SIGKILL");
        await once(child, "exit");
      }
      await rm(directory, { recursive: true, force: true });
    }
  },
);
