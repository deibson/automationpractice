class ProductPage {

    get nameProduct() {
        return Cypress.$("#center_column > div > div > div.pb-center-column.col-xs-12.col-sm-4 > h1")
    }

    get priceProduct() {
        return Cypress.$("span#our_price_display")
    }

    get amountProduct() {
        return Cypress.$("#quantity_wanted")
    }

    get btnStoreCar() {
        return cy.get('#add_to_cart > button')
    }

    get btnCheckOut() {
        return cy.xpath('//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a')
    }

    verifyDataProduct(data) {
        const name = this.nameProduct.text().trimStart().trimEnd()
        const price = this.priceProduct.text().trimStart().trimEnd()
        data['amount']= this.amountProduct.val()
        expect(name).to.eq(data['name'])
        expect(price).to.eq(data['price'])
        return data
    }

    addProduct() {
        this.btnStoreCar.click()
    }

    advanceCheckout() {
        this.btnCheckOut.contains('Proceed to checkout')
        this.btnCheckOut.click()
    }
}

module.exports = new ProductPage()
