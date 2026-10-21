---
kind: validation
routes:
  desktop: Desktop
steps:
- text: Choose another Service mode
  kind: actor
  actor: user
  entities:
  - entity: settings
    effect: reads
    facts:
    - Service mode
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
- text: Refuse and ask to stop the meeting first
  kind: product
  entities:
  - entity: meeting
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::models
---

# Change service mode during a meeting

## Trigger

The person tries to switch the service mode while a meeting runs.

## Outcome

The service mode is unchanged; Savvy asks to stop the meeting first.
