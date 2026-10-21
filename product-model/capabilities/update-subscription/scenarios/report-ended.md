---
kind: alternate
routes:
  webhook: Billing webhook
steps:
- text: Report that the subscription ended
  kind: actor
  actor: payment-processor
  entities:
  - entity: subscription
    effect: reads
    facts: []
  contexts:
    webhook:
      place: billing-webhook
- text: Record the subscription as canceled
  kind: product
  entities:
  - entity: subscription
    effect: changes
    from: Active
    to: Canceled
    facts: []
  contexts:
    webhook:
      place: billing-webhook
---

# Report an ended subscription

## Trigger

The subscription ends.

## Outcome

The subscription is canceled and a new monthly plan can be bought.
