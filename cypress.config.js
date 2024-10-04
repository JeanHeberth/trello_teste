const {defineConfig} = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
    e2e: {
        specPattern: 'cypress/integration/**/*.cy.{js,jsx,ts,tsx}',
        supportFile: 'cypress/support/e2e.js',
        baseUrl: 'https://api.trello.com/1',
        env: {
            apiKey: 'c3f6e8563d3950aa5adef74b3828ebfa',
            token: 'ATTAa1bcd847e7b62f64695857e7e4d8d005ac3c0086cd56219a14d56d3973f9f83f0A2C5CD1',
            boardName: 'Quadro Serasa',
            listName: 'Lista Serasa',
            cardName: 'Card Serasa teste'
        },
        setupNodeEvents(on, config) {
            allureWriter(on, config);
            return config;
        },
    },

    "video": true,
    "videosFolder": "cypress/videos",
    "screenshotsFolder": "cypress/screenshots",
    "viewportWidth": 1280,
    "viewportHeight": 720,
    "defaultCommandTimeout": 1000
});
