---
kind: alternate
routes:
  desktop: Desktop and browser
steps:
- text: Choose Sign in to Savvy on the Account page
  kind: actor
  actor: user
  entities: []
  contexts:
    desktop:
      place: desktop::models
- text: Open the Savvy sign-in page in the browser
  kind: product
  entities: []
  contexts:
    desktop:
      place: desktop::models
- text: Choose Sign in with Google and approve
  kind: actor
  actor: user
  entities: []
  contexts:
    desktop:
      place: account-web::sign-in
- text: Hand the sign-in back to Savvy
  kind: product
  entities: []
  contexts:
    desktop:
      place: account-web::sign-in
- text: Keep the sign-in in Keychain or Credential Manager and show the Savvy account
  kind: product
  entities:
  - entity: settings
    effect: changes
    facts:
    - Signed-in account
  - entity: savvy-account
    effect: reads
    facts:
    - Name
    - Email
    - Meeting time remaining
    - Briefs remaining
  contexts:
    desktop:
      place: desktop::models
---

# Sign in with Google

## Trigger

The person's Savvy account uses Google.

## Outcome

This computer is signed in to that account.
