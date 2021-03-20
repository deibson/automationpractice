const page = require('./page')

class HomePage extends page {

    get inputSearch(){
        return cy.get('#search_query_top')
    }

    get btnSearch(){
        return cy.xpath('//*[@id="searchbox"]/button')
    }

    open () {
        return super.open()
    }
    clear () {
        return super.clear()
    }
    verifyTitle(title){
        return super.verifyTitle(title)
    }
    search(search){
        this.inputSearch.type(search)
        this.btnSearch.click()
    }
}

module.exports = new HomePage()
