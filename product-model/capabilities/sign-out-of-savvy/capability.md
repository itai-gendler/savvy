---
availability:
- place: desktop
domain: models-and-account
references:
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#managed_sign_out
- kind: code
  role: implementation
  target: src-tauri/src/managed.rs#sign_out
- kind: code
  role: implementation
  target: src/ManagedAccount.tsx#ManagedAccount
---

# Sign out of Savvy

Sign out of Savvy on the Account page. Only this computer's sign-in is removed: the subscription is not canceled, and keys, documents and history stay.
