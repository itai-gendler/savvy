---
kind: primary
routes:
  desktop: Desktop
steps:
- text: Choose Check microphone and speak
  kind: actor
  actor: user
  entities:
  - entity: settings
    effect: reads
    facts:
    - Microphone
    - Input Channel
  contexts:
    desktop:
      place: desktop::general
- text: Show the microphone level until signal is detected
  kind: product
  entities: []
  contexts:
    desktop:
      place: desktop::general
- text: Continue to the system-audio check and play something
  kind: actor
  actor: user
  entities: []
  contexts:
    desktop:
      place: desktop::general
- text: Show the meeting-audio level until signal is detected
  kind: product
  entities:
  - entity: meeting
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::general
- text: Choose Start transcription test and speak
  kind: actor
  actor: user
  entities: []
  contexts:
    desktop:
      place: desktop::general
- text: Transcribe a few seconds with the selected provider and show the Test transcript
  kind: product
  entities:
  - entity: settings
    effect: reads
    facts:
    - Transcription Provider
    - Transcription Model
    - Conversation Language
  contexts:
    desktop:
      place: desktop::general
---

# Check signal and transcription

## Trigger

The person wants to know Savvy hears both sides and can transcribe them.

## Outcome

Both meters moved and a test transcript is shown.

## Edge cases

- With microphone only, the meeting-audio check is skipped.
- With Savvy managed, the transcription test runs through Savvy's service.
