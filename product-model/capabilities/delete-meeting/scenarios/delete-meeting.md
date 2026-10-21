---
kind: primary
routes:
  desktop: Desktop
steps:
- text: Choose Delete meeting on a completed meeting
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
- text: Confirm Delete permanently in Delete meeting?
  kind: actor
  actor: user
  entities:
  - entity: meeting
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::history
- text: Remove the recording, transcript file and recommendations, and drop the meeting from the list
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
      place: desktop::history
---

# Delete a meeting

## Trigger

The person no longer wants a meeting kept.

## Outcome

The meeting, its recording, transcript and recommendations are permanently removed.
