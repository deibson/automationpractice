module.exports = class Page {
    open(path = '') {
        return cy.visit(`http://automationpractice.com/${path}`)
    }

    clear() {
        cy.clearCookies()
    }

    verifyTitle(title) {
        cy.title().should('include', title)
    }
}
