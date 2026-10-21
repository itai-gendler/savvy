---
kind: edge
routes:
  desktop: Desktop
steps:
- text: Choose Refresh account
  kind: actor
  actor: user
  entities: []
  contexts:
    desktop:
      place: desktop::models
- text: Savvy's service cannot be reached
  kind: condition
  entities: []
  contexts:
    desktop:
      place: desktop::models
- text: Say Savvy is offline and to reconnect to refresh the balance
  kind: product
  entities: []
  contexts:
    desktop:
      place: desktop::models
---

# Open the account while the service is unreachable

## Trigger

The person refreshes the account while offline.

## Outcome

Savvy says it is offline and to reconnect to refresh the balance and use managed assistance.

## Edge cases

- An expired sign-in asks to sign in again.
