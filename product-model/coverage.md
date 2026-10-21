---
scope: The Savvy desktop app (React interface, Tauri shell and Rust crates) and the managed service for accounts,
  billing, meeting sessions, transcription relay, briefs and advice.
method: Static reading of tracked source, tests and documentation at d3581d09545008ebe029028a73bfc1ca8745a971; nothing
  was built or run.
covered:
- description: 'Desktop interface: setup, preparation, brief review, readiness, meeting overlay, history and settings
    pages.'
  paths:
  - src/
- description: Desktop shell commands, settings, credentials, managed client, audio checks, overlay, tray and updater.
  paths:
  - src-tauri/src/
  - src-tauri/capabilities/
  - src-tauri/tauri.conf.json
- description: Domain contracts, source scanning and extraction, audio capture, transcription, recommendation triggers
    and validation, provider prompts and local storage.
  paths:
  - crates/domain/
  - crates/dossier/
  - crates/audio/
  - crates/transcription/
  - crates/recommendations/
  - crates/providers/
  - crates/storage/
- description: Managed offer catalog shared by the desktop app and the service.
  paths:
  - config/managed-catalog.json
- description: 'Managed service: sign-in pages, accounts, allowance ledger, checkout and billing events, meeting
    sessions, transcription relay, briefs and advice.'
  paths:
  - backend/src/
  - backend/index.html
exclusions:
- description: Marketing and pricing website.
  paths:
  - www/
- description: Service deployment units, ingress and monitoring.
  paths:
  - deploy/
- description: Build, release and CI configuration and helper scripts.
  paths:
  - .github/
  - scripts/
  - .cargo/
  - .vscode/
  - backend/scripts/
  - src-tauri/build.rs
- description: Test harnesses, acceptance checklists and synthetic fixtures.
  paths:
  - backend/e2e/
  - tests/
- description: Service operator tooling for migration and backup.
  paths:
  - backend/src/migrate.ts
  - backend/src/backup.ts
- description: Static assets and HTML shells of the desktop interface.
  paths:
  - public/
  - index.html
unmapped:
- description: Meeting outline tracking and the running meeting memory sent with each recommendation request.
  paths:
  - crates/meeting/
- description: Menu-bar and tray menu entries other than start, check for updates and quit, and overlay window placement.
  paths:
  - src-tauri/src/tray.rs
  - src-tauri/src/overlay.rs
limitations: []
---

# Coverage
