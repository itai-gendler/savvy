---
appliesTo:
- type: capability
  id: add-client-folder
- type: capability
  id: unselect-client-documents
- type: capability
  id: remove-client
- type: capability
  id: clear-guidance-folder
references:
- kind: doc
  role: intent
  target: README.md
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#remove_client_context
- kind: code
  role: implementation
  target: crates/dossier/src/lib.rs#scan_folder
---

# Savvy never changes source folders

Client and guidance documents are read in place and never copied, moved or edited. Removing a client, unselecting documents or clearing the guidance folder leaves every file where it was.
