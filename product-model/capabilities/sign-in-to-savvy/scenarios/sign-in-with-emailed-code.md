---
kind: primary
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
- text: Open the Savvy sign-in page in the browser and wait, offering Cancel sign-in
  kind: product
  entities: []
  contexts:
    desktop:
      place: desktop::models
- text: Enter the email address and choose Email me a code
  kind: actor
  actor: user
  entities:
  - entity: savvy-account
    effect: reads
    facts:
    - Email
  contexts:
    desktop:
      place: account-web::sign-in
- text: Email a 6-digit code that expires in 10 minutes
  kind: product
  entities:
  - entity: savvy-account
    effect: reads
    facts:
    - Email
  contexts:
    desktop:
      place: account-web::sign-in
- text: Enter the code from the email
  kind: actor
  actor: user
  entities: []
  contexts:
    desktop:
      place: account-web::sign-in
- text: Verify the code and hand the sign-in back to Savvy
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

# Sign in with an emailed code

## Trigger

The person has a Savvy account and signs in on this computer.

## Outcome

This computer is signed in and the Account page shows who is signed in with the minutes and briefs remaining.

## Edge cases

- A new code can be sent after 30 seconds; only the latest code works.
