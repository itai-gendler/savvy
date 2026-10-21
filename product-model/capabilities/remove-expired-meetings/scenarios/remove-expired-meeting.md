---
kind: primary
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
- text: A completed meeting ended more than 30 days ago
  kind: condition
  entities:
  - entity: meeting
    effect: reads
    facts:
    - Ended
  contexts:
    desktop:
      place: desktop
- text: Delete the meeting with its recording, transcript file and recommendations
  kind: product
  entities:
  - entity: meeting
    effect: removes
    from: Completed
  - entity: recommendation
    effect: removes
    from: Completed
    with: meeting
  contexts:
    desktop:
      place: desktop
- text: Delete leftover recording and transcript files of meetings that no longer exist
  kind: product
  entities:
  - entity: meeting
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop
---

# Remove a meeting older than 30 days

## Trigger

Savvy launches with a completed meeting that ended more than 30 days ago.

## Outcome

The meeting, its recording, transcript file and recommendations are gone from History and disk.
