---
availability:
- place: desktop
- place: account-web
domain: models-and-account
references:
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#managed_sign_in_begin
- kind: code
  role: implementation
  target: src-tauri/src/managed.rs#finish_browser_callback
- kind: code
  role: implementation
  target: backend/src/main.tsx
- kind: code
  role: implementation
  target: backend/src/auth.ts
- kind: code
  role: implementation
  target: src/ManagedAccount.tsx#ManagedAccount
---

# Sign in to Savvy

Sign in to Savvy managed, or create the account on first sign-in, from setup or the Account page. Savvy opens the sign-in page in the browser; the person continues with Google or a 6-digit code emailed to them, and the browser hands the sign-in back to the app. No purchase is required.
