---
kind: primary
routes:
  desktop: Desktop
steps:
- text: Choose Check readiness
  kind: actor
  actor: user
  entities: []
  contexts:
    desktop:
      place: desktop::prepare
- text: Check microphone and, unless microphone only is set, screen and system audio permission
  kind: product
  entities:
  - entity: settings
    effect: reads
    facts:
    - Microphone only
  contexts:
    desktop:
      place: desktop::meeting-readiness
- text: Check that the transcription provider has an API key and the reasoning CLI is available
  kind: product
  entities:
  - entity: settings
    effect: reads
    facts:
    - Transcription Provider
    - Reasoning provider
  - entity: transcription-api-key
    effect: reads
    facts:
    - Provider
  contexts:
    desktop:
      place: desktop::meeting-readiness
- text: Show each check as granted, configured or available
  kind: product
  entities: []
  contexts:
    desktop:
      place: desktop::meeting-readiness
---

# Check readiness with your own providers

## Trigger

The person is ready to begin a meeting with a reviewed brief, or without a brief.

## Outcome

Before you start lists each check, and Start meeting is available when the key is configured and the provider is available.

## Edge cases

- Recheck repeats the checks; Account and providers opens Models.
