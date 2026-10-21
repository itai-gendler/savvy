---
appliesTo:
- type: capability
  id: prepare-brief
- type: capability
  id: offer-live-recommendations
- type: capability
  id: get-advice
references:
- kind: doc
  role: intent
  target: CONTRIBUTING.md
- kind: code
  role: implementation
  target: crates/recommendations/src/lib.rs#validate_recommendation
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#resolve_provider_advice
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#map_generated_brief
---

# Briefs and recommendations cite only sources they were given

A generated brief is saved only when every fact under Facts and evidence cites at least one excerpt Savvy sent, and it has a title, an objective and a discussion outline. A recommendation is shown and kept only when it cites at least one document passage or transcript turn, and every passage and turn it cites was part of the request; Savvy noticed cards must cite one of the turns that prompted them. Source paths and locations are kept from extraction through to the card.

## Rationale

CONTRIBUTING: "A recommendation that cannot be traced back to a source is a bug."
