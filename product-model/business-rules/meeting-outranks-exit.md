---
appliesTo:
- type: capability
  id: quit-savvy
- type: capability
  id: install-update
- type: capability
  id: allow-audio-access
references:
- kind: doc
  role: intent
  target: README.md
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#stop_active_meeting
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#prepare_to_relaunch
---

# Savvy never exits in the middle of a meeting

Quitting, or closing the main window on Windows with Show Tray Icon off, stops and saves a running meeting before Savvy exits. Installing an update or reopening Savvy for a permission is refused until the meeting stops.
