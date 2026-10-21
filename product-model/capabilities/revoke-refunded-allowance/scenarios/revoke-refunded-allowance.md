---
kind: primary
routes:
  webhook: Billing webhook
steps:
- text: Report a refund of a pack or monthly payment
  kind: actor
  actor: payment-processor
  entities: []
  contexts:
    webhook:
      place: billing-webhook
- text: Revoke the allowance that payment added
  kind: product
  entities:
  - entity: allowance
    effect: changes
    from: Available
    to: Revoked
    facts: []
  contexts:
    webhook:
      place: billing-webhook
---

# Revoke a refunded payment's allowance

## Trigger

A pack or monthly payment is refunded.

## Outcome

The allowance that payment added is revoked and no longer spendable.
