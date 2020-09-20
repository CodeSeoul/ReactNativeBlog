# React Native Meetup

This is a collaborative effort creating a blog using Strapi for the backend API managing the data and a front-end for the blog using Expo and React Native. This is recommended for folks who already have some familiarity with NodeJS and React, but if you want to challenge yourself, you're welcome to catch up.

## Setup
1. Install [VSCode](https://code.visualstudio.com/download) if you haven't already
2. Install [NodeJS](https://nodejs.org/en/) if you haven't already
3. Install yarn on the client with `npm install --global yarn`

You're ready!

### Replicating the initial setup
These are the steps you would follow if you wanted to re-create this project from scratch.

1. Setup [expo](https://docs.expo.io/workflow/expo-cli/).
    * Run `npm install -g expo-cli`.
    * Run `expo init client`.
2. Setup [strapi](https://strapi.io/documentation/v3.x/getting-started/quick-start.html#_1-install-strapi-and-create-a-new-project).
    * Run `yarn create strapi-app server --quickstart`.
3. Switch to the client folder with `cd client`.
3. Install dependencies.
    * `expo install @react-navigation/native @react-navigation/stack expo-linking`
4. Setup directories.
    * `mkdir components navigation redux screens`
5. Copy `navigation/index.js`, `navigation/linkingConf.js`, and `App.js` from here.

You're caught up!
