---
appliesTo:
- type: capability
  id: offer-live-recommendations
- type: capability
  id: get-advice
references:
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#recommendation_language
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#resolve_provider_advice
---

# Recommendations are written in the conversation language

Advice is requested in the conversation language, or in the dominant language of the recent transcript when it is Auto Detect, and advice returned in another language is not shown. Say is at most 90 words.
