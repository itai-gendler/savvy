---
availability:
- place: desktop
domain: general
references:
- kind: code
  role: implementation
  target: src/App.tsx#SettingsView
- kind: code
  role: implementation
  target: src/App.tsx#ShortcutEditor
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#update_settings
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#apply_runtime_settings
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#validate_shortcut
---

# Change General settings

Change the General page: the Start Listening shortcut, Microphone only, Microphone and Input Channel, the Windows System Audio Output, Audio Feedback with its Output Device and Volume. Each change is saved and applied at once; the shortcut also appears in the tray menu.
