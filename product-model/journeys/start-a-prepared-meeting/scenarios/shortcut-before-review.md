---
kind: alternate
result: achieved
routes:
  desktop: Desktop
steps:
- text: Press the Start Listening shortcut
  kind: actor
  actor: user
  capability: check-readiness
  entities:
  - entity: settings
    effect: reads
    facts:
    - Start Listening shortcut
  contexts:
    desktop:
      place: desktop
- text: Show the brief review because the brief is unreviewed
  kind: product
  capability: check-readiness
  entities:
  - entity: brief
    effect: reads
    facts:
    - Content
  contexts:
    desktop:
      place: desktop::brief-review
- text: Read every page and choose Check readiness
  kind: actor
  actor: user
  capability: review-brief
  entities:
  - entity: brief
    effect: reads
    facts:
    - Content
  contexts:
    desktop:
      place: desktop::brief-review
- text: Remember the reviewed content and open Before you start
  kind: product
  capability: review-brief
  entities:
  - entity: brief
    effect: reads
    facts:
    - Content
  contexts:
    desktop:
      place: desktop::meeting-readiness
- text: Choose Start meeting
  kind: actor
  actor: user
  capability: start-meeting
  entities:
  - entity: meeting
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::meeting-readiness
- text: Start recording with the reviewed brief and show the overlay
  kind: product
  capability: start-meeting
  entities:
  - entity: meeting
    effect: creates
    to: Recording
    facts:
    - Context
    - Brief used
    - Started
    - Recording
  - entity: brief
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::meeting-overlay
---

# Press the shortcut before reviewing

## Trigger

The person presses the Start Listening shortcut while the brief in use is unreviewed.

## Outcome

Savvy routes through the brief review, and the meeting starts with the brief the person then reviewed.
