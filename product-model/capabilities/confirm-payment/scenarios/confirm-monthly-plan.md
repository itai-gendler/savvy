---
kind: alternate
routes:
  webhook: Billing webhook
steps:
- text: Report a completed checkout for the monthly plan
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
- text: Hold the purchase as payment pending until its first invoice is paid
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
- text: Report the paid first invoice with its period
  kind: actor
  actor: payment-processor
  entities: []
  contexts:
    webhook:
      place: billing-webhook
- text: Add the period's monthly allowance, expiring at the period end, and record the subscription as active through
    it
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
  - entity: subscription
    effect: creates
    to: Active
    facts:
    - Paid through
    - Renewal canceled
  contexts:
    webhook:
      place: billing-webhook
- text: Mark the purchase complete
  kind: product
  entities:
  - entity: purchase
    effect: changes
    from: Payment pending
    to: Complete
    facts: []
  contexts:
    webhook:
      place: billing-webhook
---

# Confirm a monthly plan payment

## Trigger

The payment processor reports a completed monthly checkout, then its paid first invoice.

## Outcome

The subscription is active through the paid period, the account has that period's monthly allowance, and the purchase is complete.
