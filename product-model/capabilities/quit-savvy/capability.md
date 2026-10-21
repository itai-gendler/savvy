---
availability:
- place: desktop
references:
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#quit
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#stop_active_meeting
- kind: code
  role: implementation
  target: src-tauri/src/tray.rs
---

# Quit Savvy

Quit with Quit Savvy in the menu-bar or tray menu. A meeting in progress is stopped and saved first. On Windows, closing the main window quits the same way when Show Tray Icon is off.
