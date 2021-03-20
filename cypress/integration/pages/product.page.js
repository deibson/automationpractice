class ProductPage {

    get btnStoreCar() {
        return cy.get('#add_to_cart > button')
    }

    get btnCheckOut() {
        return cy.xpath('//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a')
    }

    addProduct() {
        this.btnStoreCar.click()
    }

    checkout() {
        this.btnCheckOut.contains('Proceed to checkout')
        this.btnCheckOut.click()
    }
}

module.exports = new ProductPage()
