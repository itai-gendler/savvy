---
kind: primary
routes:
  desktop: Desktop
steps:
- text: Choose System, Light or Dark under Application Theme
  kind: actor
  actor: user
  entities:
  - entity: settings
    effect: reads
    facts:
    - Application Theme
  contexts:
    desktop:
      place: desktop::about
- text: Save and apply the theme
  kind: product
  entities:
  - entity: settings
    effect: changes
    facts:
    - Application Theme
  contexts:
    desktop:
      place: desktop::about
---

# Choose a theme

## Trigger

The person prefers a fixed light or dark look.

## Outcome

Savvy uses the chosen theme.
