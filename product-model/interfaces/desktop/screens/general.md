---
entities:
- entity: settings
  shows:
  - Start Listening shortcut
  - Microphone only
  - Microphone
  - Input Channel
  - System Audio Output
  - Audio Feedback
  - Output Device
  - Volume
  collects:
  - Start Listening shortcut
  - Microphone only
  - Microphone
  - Input Channel
  - System Audio Output
  - Audio Feedback
  - Output Device
  - Volume
references:
- kind: code
  role: implementation
  target: src/App.tsx#SettingsView
- kind: code
  role: implementation
  target: src/App.tsx#ShortcutEditor
- kind: code
  role: implementation
  target: src/AudioCheck.tsx#AudioCheck
---

# General settings

The General page: the Start Listening shortcut, audio checks and the Sound settings. System Audio Output appears on Windows only.
