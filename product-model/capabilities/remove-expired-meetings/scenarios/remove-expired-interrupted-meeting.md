---
kind: alternate
routes:
  desktop: Desktop
steps:
- text: Savvy launches
  kind: condition
  entities: []
  contexts:
    desktop:
      place: desktop
  unattended: true
- text: An interrupted meeting started more than 30 days ago
  kind: condition
  entities:
  - entity: meeting
    effect: reads
    facts:
    - Started
  contexts:
    desktop:
      place: desktop
- text: Delete the meeting with its recording, transcript file and recommendations
  kind: product
  entities:
  - entity: meeting
    effect: removes
    from: Interrupted
  - entity: recommendation
    effect: removes
    from: Completed
    with: meeting
  contexts:
    desktop:
      place: desktop
---

# Remove an interrupted meeting older than 30 days

## Trigger

Savvy launches with an interrupted meeting that started more than 30 days ago.

## Outcome

The interrupted meeting and its files are gone.
