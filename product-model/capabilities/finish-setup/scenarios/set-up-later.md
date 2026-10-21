---
kind: alternate
routes:
  desktop: Desktop
steps:
- text: Choose Set up later, or Explore Savvy from plans and pricing
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

# Set up later

## Trigger

The person wants to look around before granting access or adding providers.

## Outcome

Setup is recorded as completed; meetings cannot be transcribed until a key is added or the person signs in.

## Edge cases

- The Start Listening shortcut and the tray's Start listening bring setup forward instead of starting anything while setup is open.
