---
kind: alternate
routes:
  desktop: Desktop
steps:
- text: Choose Start meeting on Before you start
  kind: actor
  actor: user
  entities:
  - entity: meeting
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::meeting-readiness
- text: Savvy managed is the service mode and this computer is signed in
  kind: condition
  entities:
  - entity: settings
    effect: reads
    facts:
    - Service mode
    - Signed-in account
  contexts:
    desktop:
      place: desktop::meeting-readiness
- text: Have Savvy's service check the brief and context with its AI supplier at no charge
  kind: product
  entities:
  - entity: brief
    effect: reads
    facts:
    - Content
  contexts:
    desktop:
      place: desktop::meeting-readiness
- text: Open the account's assisted meeting while meeting time remains
  kind: product
  entities:
  - entity: savvy-account
    effect: reads
    facts:
    - Meeting time remaining
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

# Start a meeting with Savvy managed

## Trigger

The person uses Savvy managed and has meeting time.

## Outcome

The meeting is recording on the account's assisted meeting, and time is metered while audio flows.

## Edge cases

- A muted assisted meeting on the account is closed when a new one starts.
- Another assisted meeting running on the same account stops the start.
