---
kind: alternate
routes:
  desktop: Desktop
steps:
- text: Choose Monthly plan on the Account page
  kind: actor
  actor: user
  entities:
  - entity: subscription
    effect: reads
    facts:
    - Paid through
  contexts:
    desktop:
      place: desktop::models
- text: Start the purchase and open its Stripe checkout page in the browser
  kind: product
  entities:
  - entity: purchase
    effect: creates
    to: Pending
    facts:
    - Product
    - Price
    - Hours and briefs
    - Checkout
  contexts:
    desktop:
      place: desktop::models
- text: Subscribe on the checkout page
  kind: actor
  actor: user
  entities: []
---

# Subscribe to the monthly plan

## Trigger

The signed-in person has no monthly plan.

## Outcome

A pending monthly purchase exists and its checkout page is open.
