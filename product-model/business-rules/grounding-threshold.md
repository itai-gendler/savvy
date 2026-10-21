---
appliesTo:
- type: capability
  id: offer-live-recommendations
- type: capability
  id: get-advice
references:
- kind: code
  role: implementation
  target: crates/recommendations/src/lib.rs#validate_recommendation
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#resolve_provider_advice
---

# Cards Savvy offers on its own are at least 55% grounded

Answer, Red line and Savvy noticed cards below a 55% grounded score are not shown. Advice the person asks for is shown whatever its score.
