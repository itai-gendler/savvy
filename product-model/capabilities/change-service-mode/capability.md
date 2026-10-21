---
availability:
- place: desktop
domain: models-and-account
references:
- kind: code
  role: implementation
  target: src/App.tsx#SettingsView
- kind: code
  role: implementation
  target: src/Onboarding.tsx#PersonalAISetup
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#update_settings
---

# Change service mode

Switch between Use your own providers and Savvy managed with Service mode on Models, during setup, or with Configure your own providers on the Account page. Switch between meetings; switching neither cancels billing nor deletes saved keys.
