---
kind: validation
routes:
  desktop: Desktop
steps:
- text: Choose Sign out and confirm
  kind: actor
  actor: user
  entities:
  - entity: savvy-account
    effect: reads
    facts:
    - Email
  contexts:
    desktop:
      place: desktop::models
- text: A meeting is running
  kind: condition
  entities:
  - entity: meeting
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::models
- text: Refuse and ask to end the meeting before signing out
  kind: product
  entities:
  - entity: meeting
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::models
---

# Sign out during a meeting

## Trigger

The person tries to sign out while a meeting runs.

## Outcome

This computer stays signed in; Savvy asks to end the meeting first.
