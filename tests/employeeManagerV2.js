var whatyouwill = (browser) => {
    browser
        .getText('#employeeID', (result) => {
            let idNumber = Number(result.value.slice(3))
            browser
                .verify.ok(idNumber > 0, `The ID (${idNumber}) is a positive number.`)
                .verify.ok(idNumber % 1 === 0, `The ID (${idNumber}) is a whole number.`)
        })

}
module.exports = {
    beforeEach: browser => {
        browser.url("https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html")
    },
    after: browser => {
        browser.end()
    },
    //test1
    'check the landing page': browser => {
        browser
            .verify.containsText('.titleBar', 'Employee Manager')
    },
    //Q4K-52 fields can be edited and canceled
    //test2
    'Edit and cancel employee 1': browser => {
        var inputName = 'input[name="nameEntry"]'
        var inputPhone = 'input[name="phoneEntry"]'
        var inputTitle = 'input[name="titleEntry"]'
        var meeseeks = {
            name: "Mr. Meeseeks",
            phone: "1230456789",
            title: "Existence = Pain"
        }
        browser
            .click('[name="employee1"]')
            .clearValue(inputName)
            .verify.value(inputName, "")
            .setValue(inputName, meeseeks.name)
            .clearValue(inputPhone)
            .verify.value(inputPhone, "")
            .setValue(inputPhone, meeseeks.phone)
            .clearValue(inputTitle)
            .verify.value(inputTitle, "")
            .setValue(inputTitle, meeseeks.title)
            .click('.neutralButton')
            .verify.value(inputName, "Bernice Ortiz")
            .verify.value(inputPhone, "4824931093")
            .verify.value(inputTitle, "CEO")
        whatyouwill(browser)
    },
    //Q4K-52 fields can be edited and canceled
    //test3
    'Edit and cancel employee 2': browser => {
        browser
            .click('[name="employee2"]')
            .clearValue('input[name="nameEntry"]')
            .verify.value('input[name="nameEntry"]', "")
            .setValue('input[name="nameEntry"]', 'Im Mr. Meeseeks')
            .clearValue('input[name="phoneEntry"]')
            .verify.value('input[name="phoneEntry"]', "")
            .setValue('input[name="phoneEntry"]', 'Look at me!')
            .clearValue('input[name="titleEntry"]')
            .verify.value('input[name="titleEntry"]', "")
            .setValue('input[name="titleEntry"]', 'Existence is pain!')
            .click('.neutralButton')
            .verify.value('input[name="nameEntry"]', "Marnie Barnett")
            .verify.value('input[name="phoneEntry"]', "3094812387")
            .verify.value('input[name="titleEntry"]', "CTO")
        whatyouwill(browser)
    },
    //Q4K-52 fields can be edited and canceled
    //test4
    'Edit and cancel employee 3': browser => {
        browser
            .click('[name="employee3"]')
            .clearValue('input[name="nameEntry"]')
            .verify.value('input[name="nameEntry"]', "")
            .setValue('input[name="nameEntry"]', 'Im Mr. Meeseeks')
            .clearValue('input[name="phoneEntry"]')
            .verify.value('input[name="phoneEntry"]', "")
            .setValue('input[name="phoneEntry"]', 'Look at me!')
            .clearValue('input[name="titleEntry"]')
            .verify.value('input[name="titleEntry"]', "")
            .setValue('input[name="titleEntry"]', 'Existence is pain!')
            .click('.neutralButton')
            .verify.value('input[name="nameEntry"]', "Phillip Weaver")
            .verify.value('input[name="phoneEntry"]', "7459831843")
            .verify.value('input[name="titleEntry"]', "Manager")
        whatyouwill(browser)
    },
    //Q4K-8 Data persistence after save
    'Persistence after edit and save': browser => {
        browser
            .click('[name="employee4"]')
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', 'Mr. Meeseeks')
            .clearValue('input[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', '1234567890')
            .clearValue('input[name="titleEntry"]')
            .setValue('input[name="titleEntry"]', 'Existence=pain')
            .click('#saveBtn')
            .click('[name="employee5"]')
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', 'Rick')
            .clearValue('input[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', '9876543210')
            .clearValue('input[name="titleEntry"]')
            .setValue('input[name="titleEntry"]', 'Scientist')
            .click('#saveBtn')
            .click('[name="employee4"]')
            .verify.value('input[name="nameEntry"]', "Mr. Meeseeks")
            .verify.value('input[name="phoneEntry"]', "1234567890")
            .verify.value('input[name="titleEntry"]', "Existence=pain")
            .click('[name="employee5"]')
            .verify.value('input[name="nameEntry"]', 'Rick')
            .verify.value('input[name="phoneEntry"]', '9876543210')
            .verify.value('input[name="titleEntry"]', 'Scientist')
    },
    //Q4K-53  
    'Add new employee': browser => {
        browser
            .click('[name="addEmployee"]')
            .click('[name="employee11"]')
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', 'Morty')
            .clearValue('input[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', '5478693210')
            .clearValue('input[name="titleEntry"]')
            .setValue('input[name="titleEntry"]', 'Kid')
            .click('#saveBtn')

            //Q4K-54 
            .click('[name="employee6"]')
            .click('[name="employee11"]')
            .verify.value('input[name="nameEntry"]', 'Morty')
            .verify.value('input[name="phoneEntry"]', '5478693210')
            .verify.value('input[name="titleEntry"]', 'Kid')
    },
    // 'Seperate': browser => {
    //     browser
    // },

}