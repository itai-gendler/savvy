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
  target: src-tauri/src/lib.rs#list_client_documents
---

# Show client documents

Show the documents of the chosen client's folder, grouped one folder level deep with loose files first, each with its kind and whether it is selected. Files Savvy cannot read are listed as Not supported.
