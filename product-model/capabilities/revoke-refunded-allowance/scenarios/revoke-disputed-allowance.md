---
kind: alternate
routes:
  webhook: Billing webhook
steps:
- text: Report a dispute on a pack or monthly payment
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

# Revoke a disputed payment's allowance

## Trigger

The account holder's bank disputes a payment.

## Outcome

The allowance that payment added is revoked while the dispute stands.
