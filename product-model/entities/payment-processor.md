---
kind: system
acts: external
references:
- kind: code
  role: implementation
  target: backend/src/stripe.ts#webhook
- kind: code
  role: implementation
  target: backend/src/stripe.ts#processEvent
---

# Payment processor

Stripe, which hosts checkout and billing management for Savvy managed and reports payment, subscription, refund and dispute events to Savvy's service.
