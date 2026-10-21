---
kind: validation
routes:
  desktop: Desktop
steps:
- text: Choose Delete meeting on the running meeting and confirm
  kind: actor
  actor: user
  entities:
  - entity: meeting
    effect: reads
    facts:
    - Context
    - Started
  contexts:
    desktop:
      place: desktop::history
- text: The meeting is still recording or muted
  kind: condition
  entities:
  - entity: meeting
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::history
- text: Refuse and ask to stop the meeting before deleting it
  kind: product
  entities:
  - entity: meeting
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::history
---

# Delete a meeting that is still running

## Trigger

The person tries to delete the meeting in progress from History.

## Outcome

Nothing is deleted; Savvy asks to stop the meeting first.
