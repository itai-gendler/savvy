---
kind: alternate
routes:
  desktop: Desktop
steps:
- text: Turn off Show Tray Icon
  kind: actor
  actor: user
  entities:
  - entity: settings
    effect: reads
    facts:
    - Show Tray Icon
  contexts:
    desktop:
      place: desktop::advanced
- text: Remove the icon and save the setting
  kind: product
  entities:
  - entity: settings
    effect: changes
    facts:
    - Show Tray Icon
  contexts:
    desktop:
      place: desktop::advanced
---

# Hide the tray icon

## Trigger

The person does not want Savvy in the menu bar or system tray.

## Outcome

The icon disappears; on Windows, closing the main window now quits Savvy and Start Hidden no longer applies.
