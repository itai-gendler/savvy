---
kind: primary
routes:
  desktop: Desktop
steps:
- text: Choose Stop meeting on the overlay
  kind: actor
  actor: user
  entities:
  - entity: meeting
    effect: reads
    facts:
    - Started
  contexts:
    desktop:
      place: desktop::meeting-overlay
- text: Confirm Stop meeting
  kind: actor
  actor: user
  entities:
  - entity: meeting
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::meeting-overlay
- text: Stop capture and transcription, cancel any recommendation in progress and play the stop cue
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
      place: desktop::meeting-overlay
- text: Write the transcript file, hide the overlay and show History
  kind: product
  entities:
  - entity: meeting
    effect: reads
    facts:
    - Context
    - Started
    - Ended
    - Recording
  contexts:
    desktop:
      place: desktop::history
---

# Stop the meeting

## Trigger

The conversation is over.

## Outcome

The meeting is completed with its recording and transcript, and History lists it.

## Edge cases

- Keep listening closes the confirmation and the meeting continues.
- A muted meeting stops the same way.
