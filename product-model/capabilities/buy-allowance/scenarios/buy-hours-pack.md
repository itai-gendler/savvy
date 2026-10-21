---
kind: primary
routes:
  desktop: Desktop
steps:
- text: Choose Buy hours pack on the Account page
  kind: actor
  actor: user
  entities:
  - entity: savvy-account
    effect: reads
    facts:
    - Meeting time remaining
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
- text: Pay on the checkout page
  kind: actor
  actor: user
  entities: []
- text: Show Payment pending until Savvy confirms the payment
  kind: product
  entities:
  - entity: purchase
    effect: reads
    facts:
    - Product
  contexts:
    desktop:
      place: desktop::models
---

# Buy an hours pack

## Trigger

The signed-in person wants more meeting time.

## Outcome

A pending purchase exists and its checkout page is open in the browser; time is added once payment is confirmed.

## Edge cases

- A failed or expired purchase offers Try checkout again, which starts a new purchase.
