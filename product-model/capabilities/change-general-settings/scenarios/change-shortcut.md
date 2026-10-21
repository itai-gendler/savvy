---
kind: alternate
routes:
  desktop: Desktop
steps:
- text: Choose the Start Listening shortcut and press a new key combination
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
- text: Check it has a modifier and a main key, register it and show it in the tray menu
  kind: product
  entities:
  - entity: settings
    effect: changes
    facts:
    - Start Listening shortcut
  contexts:
    desktop:
      place: desktop::general
---

# Change the Start Listening shortcut

## Trigger

The default shortcut clashes with another app.

## Outcome

The new shortcut starts and stops listening and shows in the tray menu.

## Edge cases

- Escape or a click elsewhere cancels; Reset shortcut restores the platform default.
- A combination that cannot be registered keeps the earlier shortcut.
