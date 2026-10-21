---
kind: alternate
routes:
  desktop: Desktop
steps:
- text: The reasoning provider is unavailable
  kind: condition
  entities:
  - entity: settings
    effect: reads
    facts:
    - Reasoning provider
  contexts:
    desktop:
      place: desktop::meeting-readiness
- text: Tick Start with AI assistance unavailable and choose Start meeting
  kind: actor
  actor: user
  entities:
  - entity: meeting
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::meeting-readiness
- text: Start recording the microphone to a new local file and show the overlay
  kind: product
  entities:
  - entity: meeting
    effect: creates
    to: Recording
    facts:
    - Context
    - Brief used
    - Started
    - Recording
  contexts:
    desktop:
      place: desktop::meeting-overlay
---

# Start with AI assistance unavailable

## Trigger

Before you start shows the reasoning provider as unavailable.

## Outcome

The meeting records and transcribes, and Savvy offers no recommendations.
