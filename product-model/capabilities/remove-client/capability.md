---
availability:
- place: desktop
domain: prepare
references:
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#remove_client_context
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#with_context_removal
- kind: code
  role: implementation
  target: src/App.tsx#App
---

# Remove client

Remove a client from Savvy. Its briefs, generated brief files, meetings with their recordings and transcripts, and its passages are deleted; the source folder and its files stay untouched.
