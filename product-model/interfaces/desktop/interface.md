---
type: desktop-app
actors:
- user
references:
- kind: code
  role: implementation
  target: src/App.tsx#App
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#run
- kind: code
  role: implementation
  target: src-tauri/src/tray.rs
- kind: code
  role: implementation
  target: src-tauri/src/overlay.rs
---

# Savvy desktop

The desktop app for macOS and Windows 11: the main window with Prepare, General, Models, Advanced, History and About, the meeting overlay, the Start Listening shortcut and the menu-bar or tray icon. Transcription providers, reasoning CLIs, Savvy's service and the browser are outbound dependencies.
