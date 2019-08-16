// let editTest = require('../testAssets/testEdit')
let manager = {}
module.exports = {
    beforeEach: browser => {
        manager = browser.page.employeeManagerPage()
        manager.navigate()
    },
    after: browser => {
        browser.end()
    },
    'edit employee': browser => {
        manager
        .editTest('Link', {name: 'Liliana Vess', phone: '1258749630', email:'zombies@graveyard.com' ,title: 'Necromancer'}, 'AJ')
        .verify.containsText('@employeeID', '80118451' )
    },
    'return previous employee': browser => {
        manager
        .editTest('Liliana Vess', {name: 'Link', phone: '8012570008', email:'masterSword@templeoftime.com' ,title: 'Hero of Time'}, 'AJ')
        .verify.containsText('@employeeID', '80118451' )
    }

}