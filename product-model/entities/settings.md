---
singleton: true
references:
- kind: code
  role: implementation
  target: src-tauri/src/settings.rs#AppSettings
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#validate_settings
- kind: code
  role: implementation
  target: src/types.ts#AppSettings
---

# Settings

Savvy's own settings on this computer: the provider path, audio devices, models, preparation defaults and app behavior. They are kept once, outside any meeting, and saved immediately when changed.

## Information kept

- **Service mode** — Use your own providers, or Savvy managed.
- **Signed-in account** — The Savvy account this computer is signed in to, if any; its credential is kept in macOS Keychain or Windows Credential Manager.
- **Setup completed** — Whether first-run setup was finished or put off; completed setup survives application updates.
- **Start Listening shortcut** — The keyboard shortcut that starts or stops listening; Command+Shift+M on macOS and Ctrl+Shift+M on Windows by default.
- **Microphone only** — Capture only the microphone, without system audio.
- **Microphone** — The preferred input device; the system default when none is chosen or the preferred one is disconnected.
- **Input Channel** — One input channel of the microphone, or the average of all channels.
- **System Audio Output** — On Windows, the playback device whose audio is captured as the other side; the Windows default playback device when none is chosen.
- **Audio Feedback** — Whether a short cue plays when listening starts and stops.
- **Output Device** — The device that plays listening cues.
- **Volume** — Volume of the listening cues, from 0 to 100%.
- **Transcription Provider** — Deepgram or AssemblyAI, used with your own providers.
- **Transcription Model** — The provider's streaming speech-to-text model.
- **Conversation Language** — The language spoken in meetings, or Auto Detect; limited to the languages the transcription model supports, and used for transcripts and recommendations.
- **Reasoning provider** — Codex or Claude: the signed-in CLI that prepares briefs and recommendations with your own providers.
- **Reasoning Model** — The Codex or Claude model used.
- **Context Window** — Claude's 200k or 1M context-window variant.
- **Service Tier** — Standard or Fast processing for Codex.
- **Guidance folder** — The folder of general guidelines Savvy reads before every meeting, if any.
- **Brief prompt** — The generation prompt used when preparing a brief, up to 8,000 characters.
- **Start Hidden** — Launch without opening the main window.
- **Launch on Startup** — Start Savvy when the person logs in.
- **Show Tray Icon** — Show Savvy in the macOS menu bar or the Windows system tray.
- **Overlay** — Minimal, the compact listening pill, or Live, with transcript and recommendations.
- **Overlay Position** — Bottom or Top of the screen.
- **Show Live Transcript** — Show the latest transcript text above the meeting controls.
- **Application Theme** — System, Light or Dark.
