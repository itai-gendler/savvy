---
kind: primary
routes:
  webhook: Billing webhook
steps:
- text: Report that the subscription cancels at the period end
  kind: actor
  actor: payment-processor
  entities:
  - entity: subscription
    effect: reads
    facts: []
  contexts:
    webhook:
      place: billing-webhook
- text: Record that renewal is canceled
  kind: product
  entities:
  - entity: subscription
    effect: changes
    facts:
    - Renewal canceled
  contexts:
    webhook:
      place: billing-webhook
---

# Cancel renewal at the period end

## Trigger

The person canceled the monthly plan in the billing portal.

## Outcome

Renewal is canceled; the Account page says paid access ends on the paid-through date and purchased packs remain.
