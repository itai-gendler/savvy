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
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#build_context_pack
---

# Unselect client documents

Leave documents of the chosen client out of briefs and meeting context: untick one, untick a subfolder, or Select none. Unselected files stay in the folder.
