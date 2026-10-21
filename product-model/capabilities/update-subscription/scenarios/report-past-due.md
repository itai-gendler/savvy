---
kind: alternate
routes:
  webhook: Billing webhook
steps:
- text: Report that the subscription is past due
  kind: actor
  actor: payment-processor
  entities:
  - entity: subscription
    effect: reads
    facts: []
  contexts:
    webhook:
      place: billing-webhook
- text: Record the subscription as past due
  kind: product
  entities:
  - entity: subscription
    effect: changes
    from: Active
    to: Past due
    facts: []
  contexts:
    webhook:
      place: billing-webhook
---

# Report a past-due renewal

## Trigger

A renewal payment fails.

## Outcome

The subscription is past due; the Account page says payment is overdue and paid access ends on the paid-through date.
