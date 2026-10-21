---
kind: primary
routes:
  desktop: Desktop
steps:
- text: A meeting is recording
  kind: condition
  entities:
  - entity: meeting
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::meeting-overlay
  unattended: true
- text: Stream microphone and system audio to the transcription provider in the conversation language
  kind: product
  entities:
  - entity: settings
    effect: reads
    facts:
    - Service mode
    - Transcription Provider
    - Transcription Model
    - Conversation Language
    - Microphone only
  contexts:
    desktop:
      place: desktop::meeting-overlay
- text: Keep each final turn in the transcript, marked Microphone or System audio
  kind: product
  entities:
  - entity: meeting
    effect: changes
    facts:
    - Transcript
  contexts:
    desktop:
      place: desktop::meeting-overlay
- text: Show the latest turns above the controls when the Live overlay and Show Live Transcript are on
  kind: product
  entities:
  - entity: meeting
    effect: reads
    facts:
    - Transcript
  - entity: settings
    effect: reads
    facts:
    - Overlay
    - Show Live Transcript
  contexts:
    desktop:
      place: desktop::meeting-overlay
---

# Transcribe both sides

## Trigger

A meeting is recording with system audio captured.

## Outcome

The transcript grows turn by turn, marked Microphone or System audio, and the latest turns show on the overlay when enabled.

## Edge cases

- With microphone only, every turn is the microphone's.
- Deepgram requests carry its model-training opt-out.
