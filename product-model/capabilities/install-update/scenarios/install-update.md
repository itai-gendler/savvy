---
kind: primary
routes:
  desktop: Desktop
steps:
- text: Choose Install and restart in Update available
  kind: actor
  actor: user
  entities: []
  contexts:
    desktop:
      place: desktop
- text: Download and install the signed update, then relaunch
  kind: product
  entities: []
  contexts:
    desktop:
      place: desktop
---

# Install and restart

## Trigger

Savvy offers a newer version and no meeting is running.

## Outcome

The update is installed and Savvy relaunches with its settings, credentials and history.

## Edge cases

- Later dismisses the offer.
