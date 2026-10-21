---
kind: alternate
routes:
  desktop: Desktop
steps:
- text: Choose Allow for Microphone and accept the macOS prompt
  kind: actor
  actor: user
  entities: []
  contexts:
    desktop:
      place: desktop::setup
- text: Tick Use microphone only and choose Continue
  kind: actor
  actor: user
  entities: []
  contexts:
    desktop:
      place: desktop::setup
- text: Save microphone only and open the audio setup
  kind: product
  entities:
  - entity: settings
    effect: changes
    facts:
    - Microphone only
  contexts:
    desktop:
      place: desktop::setup
---

# Continue with the microphone only

## Trigger

The person does not want Savvy to capture system audio.

## Outcome

Setup continues with microphone only on; Savvy will hear only the person's side of the meeting.
