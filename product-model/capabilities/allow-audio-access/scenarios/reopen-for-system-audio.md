---
kind: edge
routes:
  desktop: Desktop
steps:
- text: Choose Check again while a permission is waiting
  kind: actor
  actor: user
  entities: []
  contexts:
    desktop:
      place: desktop::setup
- text: Probe system-audio capture and keep the permission waiting when it still fails
  kind: product
  entities: []
  contexts:
    desktop:
      place: desktop::setup
- text: Choose Reopen Savvy
  kind: actor
  actor: user
  entities: []
  contexts:
    desktop:
      place: desktop::setup
- text: Relaunch Savvy, keeping setup unfinished
  kind: product
  entities:
  - entity: settings
    effect: reads
    facts:
    - Setup completed
  contexts:
    desktop:
      place: desktop
---

# Reopen Savvy for a waiting permission

## Trigger

Screen & system audio stays on Waiting after the person allowed it in System Settings.

## Outcome

Savvy relaunches so macOS recognizes the permission; setup starts again from the welcome step.
