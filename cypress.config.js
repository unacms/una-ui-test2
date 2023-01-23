// vi: set ts=2 sw=2 sts=2:

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://example.com',
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      user_admin_email: 'admin@example.com',
      user_admin_pwd: 'xxxx', // override in cypress.env.json

      user_regular_email: 'ivan@example.com',
      user_regular_pwd: 'xxxx', // override in cypress.env.json

      user_invalid_email: 'invalid@example.com',
      user_invalid_pwd: 'invalid',
    }
  },
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
});
