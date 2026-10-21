---
availability:
- place: desktop
domain: prepare
references:
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#add_client_folder
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#scan_source_scope
- kind: code
  role: implementation
  target: crates/dossier/src/lib.rs#scan_folder
- kind: code
  role: implementation
  target: src/App.tsx#MeetingContextSelector
---

# Add client folder

Add a client folder from the Meeting context menu on Prepare. Savvy reads the folder's supported documents in place, extracts their passages into private local storage, and selects the new client as the meeting context.
