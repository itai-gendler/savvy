---
kind: primary
routes:
  desktop: Desktop
steps:
- text: Choose View details on a meeting
  kind: actor
  actor: user
  entities:
  - entity: meeting
    effect: reads
    facts:
    - Context
    - Started
  contexts:
    desktop:
      place: desktop::history
- text: Show the transcript 50 turns at a time, each with its time and You or Other speaker
  kind: product
  entities:
  - entity: meeting
    effect: reads
    facts:
    - Context
    - Started
    - Ended
    - Transcript
  contexts:
    desktop:
      place: desktop::meeting-details
- text: Page through with Next and Previous
  kind: actor
  actor: user
  entities:
  - entity: meeting
    effect: reads
    facts:
    - Transcript
  contexts:
    desktop:
      place: desktop::meeting-details
---

# Read a meeting's transcript

## Trigger

The person wants to reread what was said.

## Outcome

Meeting details shows the transcript page by page.

## Edge cases

- A meeting without a saved transcript says so.
- A meeting deleted meanwhile reports that it no longer exists, with Retry transcript.
