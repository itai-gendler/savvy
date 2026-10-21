---
kind: alternate
routes:
  desktop: Desktop
steps:
- text: Choose Minimal under Overlay
  kind: actor
  actor: user
  entities:
  - entity: settings
    effect: reads
    facts:
    - Overlay
  contexts:
    desktop:
      place: desktop::advanced
- text: Save the overlay style
  kind: product
  entities:
  - entity: settings
    effect: changes
    facts:
    - Overlay
  contexts:
    desktop:
      place: desktop::advanced
---

# Choose the minimal overlay

## Trigger

The person wants only a small listening pill during meetings.

## Outcome

The overlay shows the compact pill without transcript or recommendation cards.
