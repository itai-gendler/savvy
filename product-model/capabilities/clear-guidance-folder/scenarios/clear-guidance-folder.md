---
kind: primary
routes:
  desktop: Desktop
steps:
- text: Choose Clear guidance folder under General guidelines
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
- text: Forget the guidance folder and show No guidance folder
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

# Clear the guidance folder

## Trigger

The guidance folder should no longer be read.

## Outcome

General guidelines shows No guidance folder; the folder itself is unchanged.
