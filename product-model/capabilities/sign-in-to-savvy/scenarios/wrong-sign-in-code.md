---
kind: validation
routes:
  desktop: Desktop and browser
steps:
- text: Enter the code from the email
  kind: actor
  actor: user
  entities: []
  contexts:
    desktop:
      place: account-web::sign-in
- text: The code is wrong, expired, or has used its three attempts
  kind: condition
  entities: []
  contexts:
    desktop:
      place: account-web::sign-in
- text: Say the code is incorrect, or that it expired and a new one can be sent
  kind: product
  entities: []
  contexts:
    desktop:
      place: account-web::sign-in
---

# Enter a wrong or expired code

## Trigger

The code entered is mistyped or older than 10 minutes.

## Outcome

The person is not signed in; the page says the code is incorrect, or expired with Send a new code.
