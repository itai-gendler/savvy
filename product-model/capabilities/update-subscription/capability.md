---
availability:
- place: billing-webhook
domain: models-and-account
references:
- kind: code
  role: implementation
  target: backend/src/stripe.ts#processEvent
- kind: code
  role: implementation
  target: src/ManagedAccount.tsx#ManagedAccount
---

# Update subscription

Mirror subscription changes reported by the payment processor: renewal canceled at the period end, a renewal payment past due, or the subscription ended.
