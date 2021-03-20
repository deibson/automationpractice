class SearchPage {

    get listProduct() {
        return cy.get('.product_list')
    }

    get product() {
        return cy.get('.product_list > li:nth-child(1) > .product-container > div:nth-child(1) > .product-image-container')
    }

    verifySearchResult() {
        this.listProduct.should('exist')
    }

    selectProduct() {
        this.product.click()
    }
}

module.exports = new SearchPage()
