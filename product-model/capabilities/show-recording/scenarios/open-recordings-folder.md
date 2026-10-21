---
kind: alternate
routes:
  desktop: Desktop
steps:
- text: Choose Open recordings in History
  kind: actor
  actor: user
  entities: []
  contexts:
    desktop:
      place: desktop::history
- text: Open Savvy's private recordings folder
  kind: product
  entities: []
  contexts:
    desktop:
      place: desktop::history
---

# Open the recordings folder

## Trigger

The person wants every recording at once.

## Outcome

Savvy's private recordings folder opens.
