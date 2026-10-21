---
kind: alternate
routes:
  desktop: Desktop
steps:
- text: Open the Account page
  kind: actor
  actor: user
  entities: []
  contexts:
    desktop:
      place: desktop::models
- text: A purchase of the account is pending or its payment is settling
  kind: condition
  entities:
  - entity: purchase
    effect: reads
    facts:
    - Product
  contexts:
    desktop:
      place: desktop::models
- text: Show Payment pending while the payment is checked; what remains can still be used
  kind: product
  entities:
  - entity: savvy-account
    effect: reads
    facts:
    - Meeting time remaining
    - Briefs remaining
  contexts:
    desktop:
      place: desktop::models
---

# See a pending payment

## Trigger

A purchase was started and its payment is not yet confirmed.

## Outcome

Payment pending shows with the remaining allowance, Refresh account and Retry pending.

## Edge cases

- Payment is confirmed by Savvy; returning from the browser does not confirm it.
