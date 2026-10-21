---
domain: prepare
relations:
- entity: source-document
  verb: contains
  cardinality: one-to-many
- entity: brief
  verb: has
  cardinality: one-to-many
- entity: meeting
  verb: has
  cardinality: one-to-many
references:
- kind: code
  role: implementation
  target: crates/domain/src/lib.rs#ClientWorkspace
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#add_client_folder
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#commit_client_scan
---

# Client

A client folder added to Savvy. Its documents ground the briefs and live guidance for that client's meetings; the folder itself is referenced read-only.

## Information kept

- **Name** — The folder's name.
- **Folder** — Where the client folder is on this computer.
- **Document count** — How many supported documents the folder holds.
- **Last indexed** — When Savvy last read the folder successfully.
- **Indexed passages** — Private local passages extracted from the documents, each with its source path and location.
