# Project Setup

## Install Firebase CLI

see: https://firebase.google.com/docs/cli

## Initialize Firebase

`firebase init`

### Which Services to Setup

- Database
- Functions
- Hosting

**Database**

You can follow the default prompts here or customize

**Functions**

You can follow the default prompts here or customize

**Hosting**

? What do you want to use as your public directory? **build**

? Configure as a single-page app (rewrite all urls to /index.html)? **Yes**

## Configure Firebase Project

you need to create a file `app/configuration.json` that will look like the following:

```
{
  "firebase": {
    "apiKey": "<web_api_key>",
    "authDomain": "<auth_domain>",
    "databaseURL": "<database_url>",
    "projectId": "<project_id>",
    "storageBucket": "<storage_bucket>",
    "messagingSenderId": "<sender_id>",
    "appId": "<app_id>"
  }
}
```

To determine this values, in your firebase project console under `Project Settings`, in `General` select to create a new Web App. It will produce these values for you to copy.

While in the project console, you will also want to enable `Email / Password Authentication` and also create a default user.

## Run Project

Setup dependencies with `yarn install`

Run local server with `yarn start`

Access local server at `localhost:3000`

## Deploy Project

With your firebase configured, you can deploy to your project which has Hosting enabled.

List all firebase projects with `firebase projects:list`

Select the appropriate project with `firebase use <project>`

deploy with `firebase deploy`
