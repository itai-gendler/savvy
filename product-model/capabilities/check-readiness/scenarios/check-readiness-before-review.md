---
kind: alternate
routes:
  desktop: Desktop
steps:
- text: Press the Start Listening shortcut while nothing is recording
  kind: actor
  actor: user
  entities:
  - entity: settings
    effect: reads
    facts:
    - Start Listening shortcut
  contexts:
    desktop:
      place: desktop
- text: The brief in use has not been reviewed, or its content changed since
  kind: condition
  entities:
  - entity: brief
    effect: reads
    facts:
    - Content
  contexts:
    desktop:
      place: desktop::prepare
- text: Bring the main window forward and show the brief review
  kind: product
  entities:
  - entity: brief
    effect: reads
    facts:
    - Title
    - Prepared
    - Content
  contexts:
    desktop:
      place: desktop::brief-review
---

# Press the shortcut before reviewing the brief

## Trigger

The person presses the Start Listening shortcut while the brief in use is unreviewed or changed since review.

## Outcome

The main window comes forward on Your meeting brief instead of Before you start.
