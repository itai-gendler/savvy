---
kind: validation
routes:
  desktop: Desktop
steps:
- text: Choose Install and restart in Update available
  kind: actor
  actor: user
  entities: []
  contexts:
    desktop:
      place: desktop
- text: A meeting is running
  kind: condition
  entities:
  - entity: meeting
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop
- text: Postpone the update and say to stop the meeting first
  kind: product
  entities:
  - entity: meeting
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop
---

# Install during a meeting

## Trigger

A meeting is running when the person accepts the update.

## Outcome

Nothing is installed; Savvy says to stop the meeting before updating.
