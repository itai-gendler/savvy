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
  target: src/lib/api.ts#managedBilling
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#managed_billing
- kind: code
  role: implementation
  target: backend/src/stripe.ts#checkout
- kind: code
  role: implementation
  target: config/managed-catalog.json
---

# Buy allowance

Buy meeting time and briefs for Savvy managed: a Monthly plan at $79 a month with 10 meeting hours and 20 briefs, or an Hours pack at $29 once with 3 hours and 6 briefs. Checkout opens on a Stripe-hosted page in the browser, and returning from it never confirms payment. Offered only while Savvy's service has billing configured.
