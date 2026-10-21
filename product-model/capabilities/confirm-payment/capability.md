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
  target: backend/src/stripe.ts#reconcilePurchases
- kind: code
  role: implementation
  target: backend/src/billing.ts#insertGrant
---

# Confirm payment

Turn the payment processor's reports into allowance. A paid hours pack adds a pack allowance with no expiry; each paid monthly invoice adds that period's monthly allowance, valid until the period end. Savvy's service also reconciles open purchases and missed events on its own, so a lost report still settles.
