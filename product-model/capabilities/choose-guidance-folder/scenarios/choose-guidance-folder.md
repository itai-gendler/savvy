---
kind: primary
routes:
  desktop: Desktop
steps:
- text: Open General guidelines and choose Choose… or Change…
  kind: actor
  actor: user
  entities:
  - entity: settings
    effect: reads
    facts:
    - Guidance folder
  contexts:
    desktop:
      place: desktop::prepare
- text: Pick a folder
  kind: actor
  actor: user
  entities: []
  contexts:
    desktop:
      place: desktop::prepare
- text: Save it as the guidance folder and re-read the context
  kind: product
  entities:
  - entity: settings
    effect: changes
    facts:
    - Guidance folder
  contexts:
    desktop:
      place: desktop::prepare
---

# Choose the guidance folder

## Trigger

The person keeps reusable guidance for all meetings in a folder.

## Outcome

The folder is the guidance folder and its name shows under General guidelines.

## Edge cases

- A guidance folder that cannot be read stops Start meeting until it is fixed or cleared.
