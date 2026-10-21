---
kind: primary
routes:
  desktop: Desktop
steps:
- text: Turn on Launch on Startup
  kind: actor
  actor: user
  entities:
  - entity: settings
    effect: reads
    facts:
    - Launch on Startup
  contexts:
    desktop:
      place: desktop::advanced
- text: Register Savvy to start at login and save the setting
  kind: product
  entities:
  - entity: settings
    effect: changes
    facts:
    - Launch on Startup
  contexts:
    desktop:
      place: desktop::advanced
---

# Launch Savvy on startup

## Trigger

The person wants Savvy ready whenever they log in.

## Outcome

Savvy starts at login from now on.
