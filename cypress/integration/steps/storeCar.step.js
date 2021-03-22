/* global Given, When, Then, And */
const homePage = require('../pages/home.page')
const searchPage = require('../pages/search.page')
const productPage = require('../pages/product.page')
const checkoutPage = require('../pages/checkout.page')
let dataProduct

Given('que eu acesso a página inicial', () => {
    homePage.open()
    homePage.clear()
})

Then('eu verifico se o título da página é {string}', (title) => {
    homePage.verifyTitle(title)
})

When('eu pesquiso produtos com as caracteristicas {string}', (search) => {
    homePage.search(search)
})

Then('eu verifico o resultado da pesquisa', () => {
    searchPage.verifySearchResult()
})

Then('eu seleciono um produto', () => {
    dataProduct = searchPage.searchDataProduct()
    searchPage.selectProduct()
})

Then('eu verifico os dados do produto', () => {
    dataProduct = productPage.verifyDataProduct(dataProduct)
})

And('que eu adiciono o produto no carrinho de compras', () => {
    productPage.addProduct()
})

Then('eu continuo o processo de checkout', () => {
    productPage.advanceCheckout()
})

And('que eu faço o checkout', () => {
    checkoutPage.checkDataProduct(dataProduct)
})
