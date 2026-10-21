---
availability:
- place: billing-webhook
domain: models-and-account
references:
- kind: code
  role: implementation
  target: backend/src/stripe.ts#processEvent
---

# Revoke refunded allowance

Withdraw the allowance a payment added when the payment processor reports that payment refunded or disputed. A dispute the account holder wins restores it unless the payment was also refunded.
