---
kind: edge
routes:
  desktop: Desktop
steps:
- text: A trigger arrives and no reasoning CLI is signed in
  kind: condition
  entities:
  - entity: settings
    effect: reads
    facts:
    - Service mode
    - Reasoning provider
  contexts:
    desktop:
      place: desktop::meeting-overlay
  unattended: true
- text: Show once that advice is unavailable until Codex or Claude Code is signed in
  kind: product
  entities: []
  contexts:
    desktop:
      place: desktop::meeting-overlay
---

# Stay quiet without a signed-in provider

## Trigger

Your own providers are in use and neither Codex nor Claude Code is signed in.

## Outcome

Savvy never thinks; it shows one notice, and recording and transcription continue.
