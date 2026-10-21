---
kind: primary
routes:
  desktop: Desktop
steps:
- text: Finish the audio setup
  kind: actor
  actor: user
  entities: []
  contexts:
    desktop:
      place: desktop::setup
- text: Record setup as completed and open Prepare
  kind: product
  entities:
  - entity: settings
    effect: changes
    facts:
    - Setup completed
  contexts:
    desktop:
      place: desktop::prepare
---

# Finish setup after the audio check

## Trigger

The person reaches the end of the audio setup.

## Outcome

Setup is recorded as completed and the main window opens on Prepare.
