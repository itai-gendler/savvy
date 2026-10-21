---
kind: edge
routes:
  webhook: Billing webhook
steps:
- text: Report that the settling payment failed
  kind: actor
  actor: payment-processor
  entities:
  - entity: purchase
    effect: reads
    facts:
    - Product
  contexts:
    webhook:
      place: billing-webhook
- text: Mark the purchase failed; nothing is added
  kind: product
  entities:
  - entity: purchase
    effect: changes
    from: Payment pending
    to: Failed
    facts: []
  contexts:
    webhook:
      place: billing-webhook
---

# Fail a delayed payment

## Trigger

The payment processor reports that a settling payment failed.

## Outcome

The purchase failed and no allowance was added.
