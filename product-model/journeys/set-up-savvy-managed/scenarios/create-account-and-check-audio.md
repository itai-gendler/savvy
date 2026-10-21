---
kind: primary
result: achieved
routes:
  desktop: Desktop
steps:
- text: Choose Create account and finish in the browser
  kind: actor
  actor: user
  capability: sign-in-to-savvy
  entities: []
  contexts:
    desktop:
      place: desktop::setup
- text: Create the account, keep the sign-in, select Savvy managed and continue to audio access
  kind: product
  capability: sign-in-to-savvy
  entities:
  - entity: savvy-account
    effect: creates
    facts:
    - Name
    - Email
    - Meeting time remaining
    - Briefs remaining
  - entity: settings
    effect: changes
    facts:
    - Signed-in account
    - Service mode
  contexts:
    desktop:
      place: desktop::setup
- text: Allow the microphone and system audio and choose Continue
  kind: actor
  actor: user
  capability: allow-audio-access
  entities: []
  contexts:
    desktop:
      place: desktop::setup
- text: Save that both sides are captured and open the audio setup
  kind: product
  capability: allow-audio-access
  entities:
  - entity: settings
    effect: changes
    facts:
    - Microphone only
  contexts:
    desktop:
      place: desktop::setup
- text: Check the microphone, system audio and transcription
  kind: actor
  actor: user
  capability: check-audio
  entities:
  - entity: settings
    effect: reads
    facts:
    - Microphone
  contexts:
    desktop:
      place: desktop::setup
- text: Record setup as completed and open Prepare
  kind: product
  capability: finish-setup
  entities:
  - entity: settings
    effect: changes
    facts:
    - Setup completed
  contexts:
    desktop:
      place: desktop::prepare
---

# Create an account and check audio

## Trigger

A new person opens Savvy for the first time.

## Outcome

Setup is complete, signed in with Savvy managed, and audio was checked.
