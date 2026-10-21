---
kind: alternate
routes:
  desktop: Desktop
steps:
- text: Check whether Codex CLI and Claude Code are installed and signed in
  kind: product
  entities: []
  contexts:
    desktop:
      place: desktop::setup
- text: Choose a connected CLI and Continue
  kind: actor
  actor: user
  entities:
  - entity: settings
    effect: reads
    facts:
    - Reasoning provider
  contexts:
    desktop:
      place: desktop::setup
- text: Save it as the reasoning provider with your own providers
  kind: product
  entities:
  - entity: settings
    effect: changes
    facts:
    - Reasoning provider
    - Service mode
  contexts:
    desktop:
      place: desktop::setup
---

# Connect your AI during setup

## Trigger

During setup the person chose Use your own providers and reached Connect your AI.

## Outcome

The chosen CLI is the reasoning provider and your own providers are in use.

## Edge cases

- Set up later keeps the current provider path and leaves AI readiness unverified.
