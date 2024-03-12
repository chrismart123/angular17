// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  PORT:4200,
  CLIENT_ORIGIN_URL: 'http://localhost:4200',
  AUTH0_DOMAIN: 'dev-xbcq64nisba4n3ck.us.auth0.com',
  AUTH0_CLIENT_ID: 'k0xhRSNzDoiKSFVNSWEOwNUwagvv3Lca',
  AUTH0_CLIENT_SECRET: 'fiTyNf8yg_H4voWfXMbW8kr9Wg5XP7bN4yAkaBlg_4MfvsuXXvp6Ec3hD6a5SwbE',
  AUTH0_CALLBACK_URL:'http://localhost:4200/home',
  API_SERVER_URL:'dev-xbcq64nisba4n3ck.us.auth0.com'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
