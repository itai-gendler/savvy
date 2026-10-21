---
kind: primary
routes:
  desktop: Desktop
steps:
- text: The other side asks a question in a final System audio turn
  kind: condition
  entities:
  - entity: meeting
    effect: reads
    facts:
    - Transcript
  contexts:
    desktop:
      place: desktop::meeting-overlay
  unattended: true
- text: Show Checking notes, then Answering their question
  kind: product
  entities: []
  contexts:
    desktop:
      place: desktop::meeting-overlay
- text: Send the brief, the most relevant document passages, hard constraints and recent turns to the reasoning
    provider
  kind: product
  entities:
  - entity: brief
    effect: reads
    facts:
    - Content
    - Red lines
    - Prohibited claims
    - Unauthorized commitments
    - Discussion outline
  - entity: source-document
    effect: reads
    facts:
    - Relative path
  contexts:
    desktop:
      place: desktop::meeting-overlay
- text: Accept the advice only if it cites what it was given, is at least 55% grounded and is in the conversation
    language
  kind: product
  entities: []
  contexts:
    desktop:
      place: desktop::meeting-overlay
- text: Show an Answer card and keep it with the meeting
  kind: product
  entities:
  - entity: recommendation
    effect: creates
    to: Completed
    facts:
    - Trigger
    - Say
    - Avoid
    - Rationale
    - Grounding
    - Grounded score
    - Sources
    - Cited turns
    - Language
    - Created
    - Expires
    - Provider and model
  - entity: meeting
    effect: reads
    facts: []
  contexts:
    desktop:
      place: desktop::meeting-overlay
---

# Answer their question

## Trigger

Someone in the meeting asks the person a question.

## Outcome

An Answer card shows what to say, what to avoid, its first source and how grounded it is.

## Edge cases

- The same question repeated within 10 seconds is answered once.
- A newer trigger cancels the advice in progress.
- Cards close after 15 to 30 seconds; Keep holds one open and Dismiss closes it.
