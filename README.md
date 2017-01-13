## RBYA app client
This is the mobile app client for the RBYA app

## Dependencies		
- [Node/NPM](https://nodejs.org/en/)		
- [Yarn](https://yarnpkg.com/)	

### Running
The app can be run 3 ways depending on the environment. They are outlined below:

`yarn run ionic:stage` Builds the app to use the development server and evelopment database. Useful for testing the app on physical device or simulator.
`yarn run ionic:serve` Builds the app to use a local server and seeded database. Useful for local development.
`yarn run ionic:build` Bukklds a production application configured to use the production server and production database.

For most purposes when developing, use `yarn run ionic:serve`.

**Note**
Regardless of how the app is run, a server is expected to be available. See parent [RBYA app repo](https://github.com/rbya/rbyapp) for running both client and service.