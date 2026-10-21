---
availability:
- place: desktop
domain: models-and-account
references:
- kind: code
  role: implementation
  target: src/ManagedAccount.tsx#ManagedAccount
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#managed_account
- kind: code
  role: implementation
  target: backend/src/billing.ts#accountSummary
---

# View plan and usage

See the Savvy account on the Account page: who is signed in, meeting minutes and briefs remaining, the monthly and pack balances with their expiry, subscription renewal, pending or failed payments, and warnings as time runs low. The page refreshes when Savvy gains focus and every minute; Refresh account checks now.
