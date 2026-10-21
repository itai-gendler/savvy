---
kind: alternate
routes:
  desktop: Desktop
steps:
- text: Choose Delete meeting on an interrupted meeting and confirm
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
- text: Remove the recording, transcript file and recommendations, and drop the meeting from the list
  kind: product
  entities:
  - entity: meeting
    effect: removes
    from: Interrupted
  - entity: recommendation
    effect: removes
    from: Completed
    with: meeting
  contexts:
    desktop:
      place: desktop::history
---

# Delete an interrupted meeting

## Trigger

An interrupted meeting is no longer wanted.

## Outcome

The interrupted meeting and its files are removed.
