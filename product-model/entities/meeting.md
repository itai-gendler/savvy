---
relations:
- entity: recommendation
  verb: has
  cardinality: one-to-many
references:
- kind: code
  role: implementation
  target: crates/domain/src/lib.rs#MeetingSession
- kind: code
  role: implementation
  target: crates/domain/src/lib.rs#MeetingState
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#start_meeting_inner
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#stop_live_meeting
---

# Meeting

One recorded conversation, from Start meeting until it stops. Only one meeting runs at a time. Its recording and transcript stay on this computer and are removed 30 days after it ends.

## Information kept

- **Context** — The client whose folder and brief it used, or General guidelines.
- **Brief used** — The reviewed brief version it started with, if any.
- **Started** — When listening began.
- **Ended** — When it stopped, or when Savvy found it interrupted.
- **Recording** — The local audio file of the microphone, in Savvy's recordings folder.
- **Transcript** — Final transcript turns in order, each with its time and its source: Microphone or System audio.

## States

### Recording

Savvy is listening: audio is captured, transcribed and checked for moments to speak up.

### Paused

The microphone is muted: capture, transcription and managed metering stop until it is unmuted.

### Completed

Stopped by the person, or by quitting Savvy; the recording and transcript are in history.

### Interrupted

Still running when Savvy last closed unexpectedly; Savvy closed it at the next launch.
