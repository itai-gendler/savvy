---
kind: alternate
routes:
  webhook: Billing webhook
steps:
- text: Report a completed checkout whose payment is still settling
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
- text: Hold the purchase as payment pending
  kind: product
  entities:
  - entity: purchase
    effect: changes
    from: Pending
    to: Payment pending
    facts: []
  contexts:
    webhook:
      place: billing-webhook
- text: Report that the payment succeeded
  kind: actor
  actor: payment-processor
  entities: []
  contexts:
    webhook:
      place: billing-webhook
- text: Add the pack allowance and mark the purchase complete
  kind: product
  entities:
  - entity: allowance
    effect: creates
    to: Available
    facts:
    - Kind
    - Meeting time
    - Meeting time used
    - Briefs
    - Briefs used
    - Expires
  - entity: purchase
    effect: changes
    from: Payment pending
    to: Complete
    facts: []
  contexts:
    webhook:
      place: billing-webhook
---

# Settle a delayed pack payment

## Trigger

An hours-pack checkout completes with a payment method that settles later.

## Outcome

The purchase waits as payment pending, then completes with its allowance when the payment succeeds.
