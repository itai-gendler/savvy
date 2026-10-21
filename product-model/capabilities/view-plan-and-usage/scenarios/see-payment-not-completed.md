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
- text: The latest purchase failed or expired
  kind: condition
  entities:
  - entity: purchase
    effect: reads
    facts:
    - Product
  contexts:
    desktop:
      place: desktop::models
- text: Show that the checkout attempt is closed and nothing was added
  kind: product
  entities: []
  contexts:
    desktop:
      place: desktop::models
---

# See a payment that was not completed

## Trigger

The latest checkout failed or expired.

## Outcome

Payment not completed says no time or briefs were added, with Try checkout again and Back to account.
