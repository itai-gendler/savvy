---
kind: alternate
routes:
  desktop: Desktop
steps:
- text: Check whether Codex CLI and Claude Code are installed and signed in, and offer only those that are
  kind: product
  entities: []
  contexts:
    desktop:
      place: desktop::models
- text: Choose Codex or Claude under Reasoning Models
  kind: actor
  actor: user
  entities:
  - entity: settings
    effect: reads
    facts:
    - Reasoning provider
  contexts:
    desktop:
      place: desktop::models
- text: Save the reasoning provider and offer its Reasoning Model with Context Window or Service Tier
  kind: product
  entities:
  - entity: settings
    effect: changes
    facts:
    - Reasoning provider
  contexts:
    desktop:
      place: desktop::models
---

# Choose a reasoning provider

## Trigger

Both Codex CLI and Claude Code are installed.

## Outcome

The chosen CLI prepares briefs and recommendations, and its own models are offered.

## Edge cases

- At launch, Savvy switches to the other CLI when only that one is signed in.
