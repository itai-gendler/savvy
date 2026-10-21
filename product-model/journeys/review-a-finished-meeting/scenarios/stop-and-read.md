---
kind: primary
result: achieved
routes:
  desktop: Desktop
steps:
- text: Choose Stop meeting and confirm
  kind: actor
  actor: user
  capability: stop-meeting
  entities:
  - entity: meeting
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::meeting-overlay
- text: Stop and save the meeting and show History
  kind: product
  capability: stop-meeting
  entities:
  - entity: meeting
    effect: changes
    from: Recording
    to: Completed
    facts:
    - Ended
    - Transcript
  contexts:
    desktop:
      place: desktop::history
- text: Choose View details on the meeting
  kind: actor
  actor: user
  capability: view-meeting-details
  entities:
  - entity: meeting
    effect: reads
    facts:
    - Context
    - Started
  contexts:
    desktop:
      place: desktop::history
- text: Show the transcript page by page
  kind: product
  capability: view-meeting-details
  entities:
  - entity: meeting
    effect: reads
    facts:
    - Transcript
  contexts:
    desktop:
      place: desktop::meeting-details
---

# Stop a meeting and read its transcript

## Trigger

The conversation is over.

## Outcome

The completed meeting's transcript is open.
