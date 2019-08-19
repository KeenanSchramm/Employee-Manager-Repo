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
        .editTest('Link', {name: lilianaVess.name, phone: lilianaVess.phone, email: lilianaVess.email ,title: lilianaVess.title}, 'Mr.Dontchange Ordelete')
        .verify.containsText('@employeeID', '80118451' )
    },
    'return previous employee': browser => {
        manager
        .editTest('Liliana Vess', {name: 'Link', phone: '8012570008', email:'masterSword@templeoftime.com' ,title: 'Hero of Time'}, 'Mr.Dontchange Ordelete')
        .verify.containsText('@employeeID', '80118451' )
    },
    'Add an employee': browser => {
        manager
        .addEmployee(princessMidna)
        .verify.containsText('@allEmployees', 'Princess Midna')
    },
    'Remove the new employee': browser => {
        manager
        .removeEmployee(princessMidna)
        .useXpath()
        .expect.element('//li[text()="Mr.Dontchange Ordelete"]').to.be.present;
        manager
        .useXpath()
        .expect.element('//li[text()="Princess Midna"]').to.not.be.present;
    }

}