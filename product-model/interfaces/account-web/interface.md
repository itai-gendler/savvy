---
type: web
actors:
- user
references:
- kind: code
  role: implementation
  target: backend/src/main.tsx
- kind: code
  role: implementation
  target: backend/src/auth.ts
- kind: doc
  role: context
  target: backend/README.md
---

# Savvy account web

The sign-in pages Savvy's service opens in the person's browser to create a Savvy account or sign in, with Google or a 6-digit emailed code, before returning to the desktop app.
