---
kind: alternate
routes:
  desktop: Desktop
steps:
- text: Choose Open transcript in Meeting details
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
- text: Write the transcript as a private text file in the recordings folder and reveal it
  kind: product
  entities:
  - entity: meeting
    effect: reads
    facts:
    - Transcript
  contexts:
    desktop:
      place: desktop::meeting-details
---

# Open the transcript from meeting details

## Trigger

The person is reading a meeting's details.

## Outcome

The transcript text file is shown in the recordings folder.
