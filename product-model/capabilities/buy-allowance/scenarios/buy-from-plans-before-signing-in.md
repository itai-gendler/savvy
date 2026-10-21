---
kind: alternate
routes:
  desktop: Desktop and browser
steps:
- text: Choose Monthly plan or Hours pack and Continue to checkout
  kind: actor
  actor: user
  entities:
  - entity: purchase
    effect: reads
    facts:
    - Product
    - Price
    - Hours and briefs
  contexts:
    desktop:
      place: desktop::setup
- text: Open the Savvy sign-in page in the browser first
  kind: product
  entities: []
  contexts:
    desktop:
      place: desktop::setup
- text: Sign in, or create the account, in the browser
  kind: actor
  actor: user
  entities:
  - entity: savvy-account
    effect: reads
    facts:
    - Email
- text: Keep the sign-in and select Savvy managed
  kind: product
  entities:
  - entity: settings
    effect: changes
    facts:
    - Signed-in account
    - Service mode
  contexts:
    desktop:
      place: desktop::setup
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
      place: desktop::setup
---

# Buy from plans and pricing before signing in

## Trigger

A new person chooses View pricing during setup and picks a plan.

## Outcome

The person is signed in, Savvy managed is selected, and the purchase's checkout page is open.

## Edge cases

- Account creation is free; checkout is a separate step.
