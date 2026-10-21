---
kind: edge
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
- text: Start recording the microphone to a new local file and show the overlay
  kind: product
  entities:
  - entity: meeting
    effect: creates
    to: Recording
    facts:
    - Context
    - Brief used
    - Started
    - Recording
  contexts:
    desktop:
      place: desktop::meeting-overlay
- text: Live transcription cannot start
  kind: condition
  entities: []
  contexts:
    desktop:
      place: desktop::meeting-overlay
- text: Keep recording and say live transcription is unavailable
  kind: product
  entities: []
  contexts:
    desktop:
      place: desktop::meeting-overlay
---

# Start while transcription cannot start

## Trigger

Transcription fails to start, for example because the provider cannot be reached.

## Outcome

The meeting still records locally; Savvy says live transcription is unavailable, and Savvy managed pauses assistance.
