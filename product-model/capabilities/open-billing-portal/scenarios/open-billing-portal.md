---
kind: primary
routes:
  desktop: Desktop
steps:
- text: Choose Manage billing on the Account page
  kind: actor
  actor: user
  entities:
  - entity: subscription
    effect: reads
    facts:
    - Paid through
    - Renewal canceled
  contexts:
    desktop:
      place: desktop::models
- text: Open the account's billing portal in the browser
  kind: product
  entities: []
  contexts:
    desktop:
      place: desktop::models
---

# Open the billing portal

## Trigger

The person wants to change payment details or cancel the monthly plan.

## Outcome

Stripe's billing portal for the account opens in the browser.

## Edge cases

- An account that never bought anything has no billing account yet.
