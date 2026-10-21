---
kind: alternate
routes:
  desktop: Desktop
steps:
- text: Show Tray Icon is off on Windows
  kind: condition
  entities:
  - entity: settings
    effect: reads
    facts:
    - Show Tray Icon
  contexts:
    desktop:
      place: desktop
- text: Close the main window while a meeting is running
  kind: actor
  actor: user
  entities:
  - entity: meeting
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop
- text: Stop and save the meeting, then exit
  kind: product
  entities:
  - entity: meeting
    effect: changes
    from: Recording
    to: Completed
    facts:
    - Ended
    - Transcript
  contexts:
    desktop:
      place: desktop
---

# Close the window on Windows without a tray icon

## Trigger

On Windows with Show Tray Icon off, the person closes the main window during a meeting.

## Outcome

The meeting is stopped and saved and Savvy exits.

## Edge cases

- With the tray icon shown, closing the window keeps Savvy running in the tray.
