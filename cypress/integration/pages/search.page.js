class SearchPage {

    get listProduct() {
        return cy.get('.product_list')
    }

    get nameProduct() {
        return Cypress.$('.product_list > li:nth-child(1) > .product-container > div:nth-child(2) > h5 > a.product-name')
    }

    get priceProduct() {
        return Cypress.$('.product_list > li:nth-child(1) > .product-container > div:nth-child(2) > div.content_price > span:nth-child(1).price.product-price')
    }

    get product() {
        return cy.get('.product_list > li:nth-child(1) > .product-container > div:nth-child(1) > .product-image-container')
    }

    verifySearchResult() {
        this.listProduct.should('exist')
    }

    searchDataProduct() {
        const name = this.nameProduct.text().trimStart().trimEnd()
        const price = this.priceProduct.text().trimStart().trimEnd()
        return {name: name, price: price}
    }

    selectProduct() {
        this.product.click()
    }
}

module.exports = new SearchPage()
