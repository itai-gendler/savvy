---
kind: alternate
routes:
  webhook: Billing webhook
steps:
- text: Report a paid renewal invoice with its period
  kind: actor
  actor: payment-processor
  entities: []
  contexts:
    webhook:
      place: billing-webhook
- text: Add the period's monthly allowance, once per period, expiring at its end
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
  contexts:
    webhook:
      place: billing-webhook
- text: Extend the subscription's paid-through date
  kind: product
  entities:
  - entity: subscription
    effect: changes
    facts:
    - Paid through
  contexts:
    webhook:
      place: billing-webhook
---

# Renew the monthly plan

## Trigger

The payment processor reports a paid renewal invoice.

## Outcome

The account has the new period's monthly allowance and the subscription is paid through the new period end.

## Edge cases

- Included time from an earlier period expires at that period's end.
