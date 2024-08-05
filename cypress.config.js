const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://portal.nysc.org.ng',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
