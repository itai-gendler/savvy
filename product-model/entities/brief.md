---
domain: prepare
references:
- kind: code
  role: implementation
  target: crates/domain/src/lib.rs#NegotiationBrief
- kind: code
  role: implementation
  target: src-tauri/src/lib.rs#render_brief_markdown
- kind: code
  role: implementation
  target: src-tauri/src/brief_document.rs#synchronize
---

# Brief

The Markdown brief for one client's meetings or for general meetings, generated from source documents or chosen from a file. The newest version for the client or for general meetings is the one in use; its Markdown is the whole brief document sent to the reasoning provider.

## Information kept

- **Title** — The brief's heading, or the chosen file's name.
- **Version** — Numbered within its client or general meetings; each prepared or chosen brief takes the next number.
- **Prepared** — When this version was created.
- **Markdown file** — The brief document on disk: generated briefs live in Savvy's private briefs folder, chosen files stay where they are.
- **Content** — The Markdown text, read from the file.
- **Objective** — What the meeting should achieve.
- **Positions** — Our position and the client's position.
- **Priorities** — What matters most, in order.
- **Discussion outline** — Up to 20 numbered sections, each with an objective and talking points.
- **Desired outcomes** — Results to aim for.
- **Questions to ask** — Questions to raise in the meeting.
- **Facts and evidence** — Statements to use, each with the source documents and locations it rests on.
- **Concessions** — What may be conceded and on what condition, marked when approval is required.
- **Red lines** — Hard constraints that must not be crossed.
- **Prohibited claims** — Claims never to make.
- **Unauthorized commitments** — Commitments the speaker may not make.
- **Risks** — Risks to watch for.
- **Instructions** — The brief prompt and meeting objective it was generated with.
- **Response language** — The language its guidance is written in.
