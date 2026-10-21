---
kind: primary
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
- text: The transcription provider has an API key, microphone access is allowed and the reviewed brief is unchanged
  kind: condition
  entities:
  - entity: transcription-api-key
    effect: reads
    facts:
    - Provider
  - entity: brief
    effect: reads
    facts:
    - Content
  contexts:
    desktop:
      place: desktop::meeting-readiness
- text: Collect the hard constraints from the brief and the guidance folder's constraint headings, with the selected
    client documents
  kind: product
  entities:
  - entity: brief
    effect: reads
    facts:
    - Red lines
    - Prohibited claims
    - Unauthorized commitments
    - Discussion outline
    - Content
  - entity: source-document
    effect: reads
    facts:
    - Relative path
    - Folder
  - entity: client
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
- text: Start live transcription in the conversation language
  kind: product
  entities:
  - entity: settings
    effect: reads
    facts:
    - Transcription Provider
    - Transcription Model
    - Conversation Language
  contexts:
    desktop:
      place: desktop::meeting-overlay
---

# Start a meeting with your own providers

## Trigger

The person starts listening as the meeting begins.

## Outcome

The meeting is recording, the overlay shows Savvy is listening, and the start cue plays when audio feedback is on.

## Edge cases

- On macOS, a refused microphone prompt stops the start with a request to allow access in System Settings.
- A guidance folder that cannot be read stops the start until it is fixed or cleared.
- A running audio check must be stopped first.
- Without a brief, the meeting runs on general guidelines only.
