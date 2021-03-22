class CheckoutPage {

    get checkNameProduct() {
        return Cypress.$('#cart_summary > tbody > tr:nth-child(1) > td.cart_description > p.product-name > a')
    }

    get checkPriceProduct() {
        return Cypress.$('#cart_summary > tbody > tr:nth-child(1) > td.cart_unit > span.price > span.price')
    }

    get checkAmountProduct() {
        return Cypress.$('#cart_summary > tbody > tr:nth-child(1) > td.cart_quantity > input:nth-child(1)')
    }

    get inStock() {
        return Cypress.$('#cart_summary > tbody > tr:nth-child(1) > td.cart_avail > span')
    }

    checkDataProduct(data) {
        const name = this.checkNameProduct.text().trimStart().trimEnd()
        const price = this.checkPriceProduct.text().trimStart().trimEnd()
        const inStock = this.inStock.text().trimStart().trimEnd()
        const amount = this.checkAmountProduct.val()

        expect(name).to.eq(data['name'])
        expect(price).to.eq(data['price'])
        expect(inStock).to.eq('In stock')
        expect(amount).to.eq(data['amount'])
    }
}

module.exports = new CheckoutPage()
