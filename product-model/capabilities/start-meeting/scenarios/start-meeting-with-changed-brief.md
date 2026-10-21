---
kind: validation
routes:
  desktop: Desktop
steps:
- text: Choose Start meeting on Before you start
  kind: actor
  actor: user
  entities:
  - entity: meeting
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::meeting-readiness
- text: The brief's content differs from the reviewed content
  kind: condition
  entities:
  - entity: brief
    effect: reads
    facts:
    - Content
  contexts:
    desktop:
      place: desktop::meeting-readiness
- text: Refuse and ask to go back and review the brief
  kind: product
  entities:
  - entity: brief
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::meeting-readiness
---

# Start after the brief changed

## Trigger

The brief's file was edited and refreshed after the person reviewed it.

## Outcome

No meeting starts; Savvy says the brief changed or has not been reviewed and to review it before starting.
