---
kind: validation
routes:
  desktop: Desktop
steps:
- text: Choose Remove client and confirm
  kind: actor
  actor: user
  entities:
  - entity: client
    effect: reads
    facts:
    - Name
  contexts:
    desktop:
      place: desktop::prepare
- text: A meeting for that client is running
  kind: condition
  entities:
  - entity: meeting
    effect: reads
    facts: []
  - entity: client
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::prepare
- text: Refuse and ask to stop the meeting first
  kind: product
  entities:
  - entity: meeting
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::prepare
---

# Remove a client whose meeting is running

## Trigger

The person tries to remove the client of the meeting in progress.

## Outcome

Nothing is removed; Savvy asks to stop the meeting first.
