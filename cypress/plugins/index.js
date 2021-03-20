/**
 * @type {Cypress.PluginConfig}
 */
const cypressEslint = require('cypress-eslint-preprocessor')
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
    on('file:preprocessor', cypressEslint())
    on('file:preprocessor', cucumber())
    return config
}
