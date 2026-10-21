---
kind: validation
routes:
  desktop: Desktop
steps:
- text: Choose Check microphone
  kind: actor
  actor: user
  entities: []
  contexts:
    desktop:
      place: desktop::general
- text: macOS has not allowed Savvy's microphone access
  kind: condition
  entities: []
  contexts:
    desktop:
      place: desktop::general
- text: Refuse and ask to allow microphone access in System Settings, then quit and reopen Savvy
  kind: product
  entities:
  - entity: settings
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::general
---

# Check audio without microphone access

## Trigger

On macOS, Savvy has no microphone permission.

## Outcome

No check runs; Savvy asks to allow microphone access, then quit and reopen Savvy.
