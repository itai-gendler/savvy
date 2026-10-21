---
availability:
- place: desktop
domain: prepare
references:
- kind: code
  role: implementation
  target: src/App.tsx#ClientDocumentList
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#set_client_document_selection
---

# Select client documents

Include documents of the chosen client in briefs and meeting context: tick one, tick a subfolder, or Select all. Not supported files cannot be selected.
