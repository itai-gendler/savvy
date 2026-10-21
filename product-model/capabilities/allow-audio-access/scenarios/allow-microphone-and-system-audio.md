---
kind: primary
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
- text: Choose Allow for Screen & system audio and allow Savvy under Privacy & Security
  kind: actor
  actor: user
  entities: []
  contexts:
    desktop:
      place: desktop::setup
- text: Watch the permissions while setup stays open and show both as Allowed
  kind: product
  entities: []
  contexts:
    desktop:
      place: desktop::setup
- text: Choose Continue
  kind: actor
  actor: user
  entities: []
  contexts:
    desktop:
      place: desktop::setup
- text: Save that both sides are captured and open the audio setup
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

# Allow the microphone and system audio

## Trigger

During setup on macOS, the person is asked to let Savvy hear the meeting.

## Outcome

Both permissions show as Allowed and setup continues to the audio check with microphone only off.

## Edge cases

- Microphone settings and System audio settings open the matching System Settings panes without requesting capture.
- Continue stays unavailable until the microphone is allowed.
