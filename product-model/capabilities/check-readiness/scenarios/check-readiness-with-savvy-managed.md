---
kind: alternate
routes:
  desktop: Desktop
steps:
- text: Choose Check readiness
  kind: actor
  actor: user
  entities: []
  contexts:
    desktop:
      place: desktop::prepare
- text: Savvy managed is the service mode
  kind: condition
  entities:
  - entity: settings
    effect: reads
    facts:
    - Service mode
  contexts:
    desktop:
      place: desktop::meeting-readiness
- text: Read the Savvy account and show the minutes available
  kind: product
  entities:
  - entity: savvy-account
    effect: reads
    facts:
    - Meeting time remaining
  contexts:
    desktop:
      place: desktop::meeting-readiness
---

# Check readiness with Savvy managed

## Trigger

The person uses Savvy managed.

## Outcome

Before you start shows the minutes available; Start meeting is unavailable when no allowance remains.

## Edge cases

- A signed-out account cannot be checked; Savvy asks to sign in.
