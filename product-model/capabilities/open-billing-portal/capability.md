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
  target: backend/src/stripe.ts#portal
---

# Open billing portal

Open Stripe's billing portal with Manage billing, from the Account page or the sign-out confirmation, to change payment details or cancel the monthly plan. Changes made there reach Savvy as subscription events.
