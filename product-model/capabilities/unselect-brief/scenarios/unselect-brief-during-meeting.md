---
kind: validation
routes:
  desktop: Desktop
steps:
- text: Choose Unselect brief and confirm Remove
  kind: actor
  actor: user
  entities:
  - entity: brief
    effect: reads
    facts:
    - Title
  contexts:
    desktop:
      place: desktop::prepare
- text: A meeting for this context is running
  kind: condition
  entities:
  - entity: meeting
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

# Unselect the brief of the running meeting

## Trigger

A meeting for the same context is running.

## Outcome

The brief stays; Savvy asks to stop the meeting first.
