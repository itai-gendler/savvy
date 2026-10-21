---
kind: edge
routes:
  desktop: Desktop
steps:
- text: System audio capture cannot start when a meeting begins
  kind: condition
  entities:
  - entity: meeting
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::meeting-overlay
  unattended: true
- text: Say system audio is unavailable while the microphone still works, with how to fix it
  kind: product
  entities: []
  contexts:
    desktop:
      place: desktop::meeting-overlay
- text: Transcribe the microphone alone
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

# Continue without system audio

## Trigger

System audio capture cannot start, for example without screen and system audio permission or with an unavailable output device.

## Outcome

The microphone keeps recording and transcribing, and Savvy says how to restore system audio.
