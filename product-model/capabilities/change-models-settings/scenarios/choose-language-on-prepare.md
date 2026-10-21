---
kind: alternate
routes:
  desktop: Desktop
steps:
- text: Open the options on Prepare and choose a Conversation language
  kind: actor
  actor: user
  entities:
  - entity: settings
    effect: reads
    facts:
    - Conversation Language
  contexts:
    desktop:
      place: desktop::prepare
- text: The current transcription model does not support that language
  kind: condition
  entities:
  - entity: settings
    effect: reads
    facts:
    - Transcription Model
  contexts:
    desktop:
      place: desktop::prepare
- text: Switch to the first provider and model that support it and save the language
  kind: product
  entities:
  - entity: settings
    effect: changes
    facts:
    - Transcription Provider
    - Transcription Model
    - Conversation Language
  contexts:
    desktop:
      place: desktop::prepare
---

# Choose a conversation language on Prepare

## Trigger

The next meeting is in another language.

## Outcome

The language is saved; when the current model lacks it, a compatible provider and model are chosen with it.
