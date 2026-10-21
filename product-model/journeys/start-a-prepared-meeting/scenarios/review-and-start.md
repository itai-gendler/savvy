---
kind: primary
result: achieved
routes:
  desktop: Desktop
steps:
- text: Read every page of the brief under review and choose Check readiness
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
- text: Check permissions, the transcription key and the reasoning provider
  kind: product
  capability: check-readiness
  entities:
  - entity: settings
    effect: reads
    facts:
    - Transcription Provider
    - Reasoning provider
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

# Review a fresh brief and start

## Trigger

A brief was just prepared and opened for review.

## Outcome

The meeting is recording with the brief the person reviewed.
