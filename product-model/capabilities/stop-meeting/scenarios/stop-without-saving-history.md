---
kind: edge
routes:
  desktop: Desktop
steps:
- text: Choose Stop meeting and confirm
  kind: actor
  actor: user
  entities:
  - entity: meeting
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::meeting-overlay
- text: The stopped meeting cannot be saved
  kind: condition
  entities:
  - entity: meeting
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::meeting-overlay
- text: Say the meeting stopped but history could not be saved, and to retry Stop meeting
  kind: product
  entities:
  - entity: meeting
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::meeting-overlay
---

# Stop when history cannot be saved

## Trigger

Saving the stopped meeting fails.

## Outcome

Capture has stopped; Savvy says the meeting stopped but history could not be saved and to retry Stop meeting.
