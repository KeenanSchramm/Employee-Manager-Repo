// let editTest = require('../testAssets/testEdit')
let manager = {}
module.exports = {
    beforeEach: browser => {
        manager = browser.page.employeeManagerPage()
        manager.navigate()
            .expect.element('@versionNumber').text.to.equal('Version 1.2')
    },
    after: browser => {
        browser.end()
    },
    'testedit practice': browser => {
        manager
        .editTest('Bernice Ortiz', {name: 'Liliana Vess', phone: '1258749630', title: 'Necromancer'}, 'Ruby Estrada')
    }
}