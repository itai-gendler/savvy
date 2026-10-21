---
kind: primary
routes:
  desktop: Desktop
steps:
- text: Choose a Microphone on General
  kind: actor
  actor: user
  entities:
  - entity: settings
    effect: reads
    facts:
    - Microphone
  contexts:
    desktop:
      place: desktop::general
- text: Save it with Input Channel back to the average of all channels and capture from it from now on
  kind: product
  entities:
  - entity: settings
    effect: changes
    facts:
    - Microphone
    - Input Channel
  contexts:
    desktop:
      place: desktop::general
---

# Choose a microphone

## Trigger

The person wants Savvy to use a particular microphone.

## Outcome

Savvy captures from that microphone, averaging all its channels, from now on.

## Edge cases

- A disconnected preferred microphone is replaced by the system default for that recording and remembered for when it reconnects.
