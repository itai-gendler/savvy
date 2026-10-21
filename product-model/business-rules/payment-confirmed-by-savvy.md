---
appliesTo:
- type: capability
  id: buy-allowance
- type: capability
  id: confirm-payment
- type: capability
  id: view-plan-and-usage
references:
- kind: doc
  role: intent
  target: README.md
- kind: code
  role: implementation
  target: backend/src/stripe.ts#processEvent
- kind: code
  role: implementation
  target: backend/src/stripe.ts#reconcilePurchases
---

# Only a payment Savvy confirms adds allowance

Returning from checkout never confirms payment or adds time. Allowance is added only when Savvy's service confirms the payment from the payment processor's report or its own reconciliation; until then the purchase shows as pending.
