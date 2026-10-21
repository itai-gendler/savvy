---
kind: validation
routes:
  desktop: Desktop
steps:
- text: Press a combination without a modifier for the Start Listening shortcut
  kind: actor
  actor: user
  entities:
  - entity: settings
    effect: reads
    facts:
    - Start Listening shortcut
  contexts:
    desktop:
      place: desktop::general
- text: Refuse and keep the earlier shortcut
  kind: product
  entities: []
  contexts:
    desktop:
      place: desktop::general
---

# Choose a shortcut without a modifier

## Trigger

The pressed combination has no modifier key or no main key.

## Outcome

The shortcut is unchanged and Savvy says it needs a modifier and a main key.
