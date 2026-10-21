---
kind: alternate
routes:
  desktop: Desktop
steps:
- text: Choose Use your own providers under Service mode
  kind: actor
  actor: user
  entities:
  - entity: settings
    effect: reads
    facts:
    - Service mode
  contexts:
    desktop:
      place: desktop::models
- text: Confirm Switch providers in Use your own providers?
  kind: actor
  actor: user
  entities: []
  contexts:
    desktop:
      place: desktop::models
- text: Save the service mode, leaving the Savvy account, subscription and keys as they are
  kind: product
  entities:
  - entity: settings
    effect: changes
    facts:
    - Service mode
  - entity: savvy-account
    effect: reads
    facts: []
  - entity: subscription
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::models
---

# Switch to your own providers

## Trigger

The person wants to use their own transcription key and CLI.

## Outcome

Your own providers are in use; the Savvy account and subscription stay active.
