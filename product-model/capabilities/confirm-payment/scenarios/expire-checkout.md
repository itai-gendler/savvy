---
kind: edge
routes:
  webhook: Billing webhook
steps:
- text: Report that the checkout expired
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
- text: Mark the purchase expired; nothing is added
  kind: product
  entities:
  - entity: purchase
    effect: changes
    from: Pending
    to: Expired
    facts: []
  contexts:
    webhook:
      place: billing-webhook
---

# Expire an unpaid checkout

## Trigger

The payment processor reports that a checkout page expired unpaid.

## Outcome

The purchase expired and no allowance was added; a new purchase can be started.
