---
type: webhook
actors:
- payment-processor
references:
- kind: code
  role: implementation
  target: backend/src/stripe.ts#webhook
- kind: code
  role: implementation
  target: backend/src/api.ts
---

# Billing webhook

The signed event endpoint through which the payment processor reports checkout, invoice, subscription, refund and dispute events to Savvy's service.
