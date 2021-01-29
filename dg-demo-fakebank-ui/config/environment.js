'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'dg-demo-fakebank-ui',
    environment,
    rootURL: '/dg-demo-fakebank-ui',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  ENV.OPEN_BANKING_BASE_URL = process.env.OPEN_BANKING_BASE_URL;
  ENV.OPEN_BANKING_API_NAMESPACE = process.env.OPEN_BANKING_API_NAMESPACE;
  ENV.OAUTH2_AUTHORIZATION_URL = process.env.OAUTH2_AUTHORIZATION_URL;
  ENV.OAUTH2_CLIENT_ID = process.env.OAUTH2_CLIENT_ID;

  return ENV;
};
