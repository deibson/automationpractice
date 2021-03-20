/* global Given, When, Then, And */
const homePage = require('../pages/home.page')
const searchPage = require('../pages/search.page')
const productPage = require('../pages/product.page')

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
    searchPage.selectProduct()
})

And('eu adiciono o produto no carrinho de compras', () => {
    productPage.addProduct()
})

And('eu faço o checkout', () => {
    productPage.checkout()
})
