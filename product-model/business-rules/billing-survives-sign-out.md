---
appliesTo:
- type: capability
  id: sign-out-of-savvy
- type: capability
  id: change-service-mode
references:
- kind: doc
  role: intent
  target: README.md
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#managed_sign_out
- kind: code
  role: implementation
  target: src/ManagedAccount.tsx#ManagedAccount
---

# Signing out or switching providers never cancels billing

Signing out removes only this computer's sign-in, and switching to your own providers changes only the service mode; the subscription keeps running until canceled in billing management, and keys, documents and history stay.
