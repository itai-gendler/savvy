---
appliesTo:
- type: capability
  id: change-service-mode
- type: capability
  id: change-general-settings
- type: capability
  id: sign-out-of-savvy
- type: capability
  id: sign-in-to-savvy
- type: capability
  id: check-audio
references:
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#update_settings
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#managed_sign_out
- kind: code
  role: implementation
  target: src-tauri/src/managed.rs#finish_browser_callback
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#audio_check_start
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#prepare_to_relaunch
---

# Capture, service mode and account stay fixed during a meeting

While a meeting runs, Savvy refuses to change the service mode, Microphone only or the Windows System Audio Output, to sign out or switch to another Savvy account, and to run an audio check.
