---
kind: primary
routes:
  desktop: Desktop
steps:
- text: Choose Savvy managed under Service mode
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
- text: Save the service mode
  kind: product
  entities:
  - entity: settings
    effect: changes
    facts:
    - Service mode
  contexts:
    desktop:
      place: desktop::models
- text: Label the page Account and show the Savvy account
  kind: product
  entities:
  - entity: savvy-account
    effect: reads
    facts:
    - Name
    - Email
    - Meeting time remaining
    - Briefs remaining
  contexts:
    desktop:
      place: desktop::models
---

# Switch to Savvy managed

## Trigger

The person wants Savvy to supply transcription and AI.

## Outcome

Savvy managed is the service mode and the page, now labelled Account, shows the Savvy account.

## Edge cases

- Signing in from setup also selects Savvy managed.
