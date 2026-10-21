---
kind: alternate
routes:
  desktop: Desktop
steps:
- text: Press the Start Listening shortcut during a meeting
  kind: actor
  actor: user
  entities:
  - entity: settings
    effect: reads
    facts:
    - Start Listening shortcut
  - entity: meeting
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop
- text: Stop capture and transcription and cancel any recommendation in progress
  kind: product
  entities:
  - entity: meeting
    effect: changes
    from: Recording
    to: Completed
    facts:
    - Ended
    - Transcript
  - entity: recommendation
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop
- text: Write the transcript file and show History
  kind: product
  entities:
  - entity: meeting
    effect: reads
    facts:
    - Context
    - Started
    - Ended
  contexts:
    desktop:
      place: desktop::history
---

# Stop with the shortcut

## Trigger

The person presses the Start Listening shortcut during a meeting.

## Outcome

The meeting stops without a confirmation and History opens.
