---
kind: edge
routes:
  desktop: Desktop
steps:
- text: Choose Advice on the overlay
  kind: actor
  actor: user
  entities:
  - entity: meeting
    effect: reads
    facts:
    - Transcript
  contexts:
    desktop:
      place: desktop::meeting-overlay
- text: No reasoning provider can be used
  kind: condition
  entities:
  - entity: settings
    effect: reads
    facts:
    - Service mode
    - Reasoning provider
  contexts:
    desktop:
      place: desktop::meeting-overlay
- text: Say advice is unavailable and how to fix it
  kind: product
  entities: []
  contexts:
    desktop:
      place: desktop::meeting-overlay
---

# Ask for advice without a provider

## Trigger

No reasoning CLI is signed in, or the Savvy account is signed out.

## Outcome

No card appears; the overlay says advice is unavailable and what to fix.
