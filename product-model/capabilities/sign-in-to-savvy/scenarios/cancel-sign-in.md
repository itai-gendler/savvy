---
kind: edge
routes:
  desktop: Desktop and browser
steps:
- text: Choose Cancel sign-in while Savvy waits for the browser
  kind: actor
  actor: user
  entities: []
  contexts:
    desktop:
      place: desktop::models
- text: Stop waiting and discard the pending sign-in
  kind: product
  entities: []
  contexts:
    desktop:
      place: desktop::models
---

# Cancel sign-in

## Trigger

The person changes their mind while the browser is open.

## Outcome

Nothing changes; a later return from the browser no longer signs this computer in.
