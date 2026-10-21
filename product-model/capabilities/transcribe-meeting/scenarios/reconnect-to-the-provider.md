---
kind: edge
routes:
  desktop: Desktop
steps:
- text: The transcription connection drops while a meeting is recording
  kind: condition
  entities:
  - entity: meeting
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::meeting-overlay
  unattended: true
- text: Keep recording and say live transcription was interrupted and is reconnecting
  kind: product
  entities: []
  contexts:
    desktop:
      place: desktop::meeting-overlay
- text: Reconnect and continue the transcript, clearing the notice
  kind: product
  entities:
  - entity: meeting
    effect: changes
    facts:
    - Transcript
  contexts:
    desktop:
      place: desktop::meeting-overlay
---

# Reconnect a dropped transcription stream

## Trigger

The connection to the transcription provider drops during a meeting.

## Outcome

Recording continues throughout; transcription resumes and the interruption notice clears.
