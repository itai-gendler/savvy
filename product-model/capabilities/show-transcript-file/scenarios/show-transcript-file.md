---
kind: primary
routes:
  desktop: Desktop
steps:
- text: Choose Show transcript file on a meeting
  kind: actor
  actor: user
  entities:
  - entity: meeting
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::history
- text: Write the transcript as a private text file in the recordings folder and reveal it
  kind: product
  entities:
  - entity: meeting
    effect: reads
    facts:
    - Transcript
  contexts:
    desktop:
      place: desktop::history
---

# Show a meeting's transcript file

## Trigger

The person wants the transcript as a file.

## Outcome

The transcript text file is shown in the recordings folder.
