---
kind: primary
routes:
  webhook: Billing webhook
steps:
- text: Report a completed and paid checkout for an hours pack
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
- text: Add a pack allowance with no expiry
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
- text: Mark the purchase complete
  kind: product
  entities:
  - entity: purchase
    effect: changes
    from: Pending
    to: Complete
    facts: []
  contexts:
    webhook:
      place: billing-webhook
---

# Confirm an hours pack payment

## Trigger

The payment processor reports a completed and paid hours-pack checkout.

## Outcome

The purchase is complete and the account has a new pack allowance of 3 hours and 6 briefs with no expiry.

## Edge cases

- A report that does not match the purchase's product or price is refused.
