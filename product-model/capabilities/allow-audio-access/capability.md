---
availability:
- place: desktop
references:
- kind: code
  role: implementation
  target: src/Onboarding.tsx#Onboarding
- kind: code
  role: implementation
  target: src/Onboarding.tsx#PermissionRow
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#probe_system_audio_permission
- kind: code
  role: implementation
  target: src-tauri/src/relaunch.rs
---

# Allow audio access

Let Savvy hear the meeting during setup: allow microphone access and, unless microphone only is chosen, screen and system audio recording on macOS. Windows has nothing to grant here; microphone access is checked again whenever a meeting starts.
