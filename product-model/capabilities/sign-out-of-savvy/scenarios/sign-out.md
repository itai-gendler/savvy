---
kind: primary
routes:
  desktop: Desktop
steps:
- text: Choose Sign out on the Account page
  kind: actor
  actor: user
  entities:
  - entity: savvy-account
    effect: reads
    facts:
    - Name
    - Email
  contexts:
    desktop:
      place: desktop::models
- text: Confirm Sign out in Sign out of Savvy?
  kind: actor
  actor: user
  entities: []
  contexts:
    desktop:
      place: desktop::models
- text: Remove this computer's sign-in and revoke it with the service
  kind: product
  entities:
  - entity: settings
    effect: changes
    facts:
    - Signed-in account
  contexts:
    desktop:
      place: desktop::models
- text: Show Sign in to Savvy
  kind: product
  entities: []
  contexts:
    desktop:
      place: desktop::models
---

# Sign out

## Trigger

The person wants this computer signed out.

## Outcome

This computer is signed out; billing, keys, documents and history are unchanged.

## Edge cases

- The confirmation also offers Manage billing for cancelling the subscription.
- Signing out waits until a pending managed brief or audio check finishes.
