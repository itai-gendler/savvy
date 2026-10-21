---
entities:
- entity: settings
  shows:
  - Start Hidden
  - Launch on Startup
  - Show Tray Icon
  - Overlay
  - Overlay Position
  - Show Live Transcript
  collects:
  - Start Hidden
  - Launch on Startup
  - Show Tray Icon
  - Overlay
  - Overlay Position
  - Show Live Transcript
references:
- kind: code
  role: implementation
  target: src/App.tsx#SettingsView
---

# Advanced

The Advanced settings page: how Savvy launches and shows itself, and how the meeting overlay looks. Recommendation Output is always the overlay, and Provider Failure is always the local fallback.
