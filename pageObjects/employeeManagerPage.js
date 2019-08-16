var employeeManagerCommands = {
    clickEmployee: function (employeeName) {
        this.api.useXpath()
        this.click(`//li[text()="${employeeName}"]`)
        this.api.useCss()
        return this
    },
    editEmployee: function (employeeInfo) {
        if (employeeInfo.name) {
            this
                .clearValue('@nameField')
                .setValue('@nameField', employeeInfo.name)
        }
        if (employeeInfo.phone) {
            this
                .clearValue('@phoneField')
                .setValue('@phoneField', employeeInfo.phone)
        }
        if (employeeInfo.title) {
            this
                .clearValue('@titleField')
                .setValue('@titleField', employeeInfo.title)
        }
        if (employeeInfo.email) {
            this
                .clearValue('@emailField')
                .setValue('@emailField', employeeInfo.email)
        }
        return this
    },
    editTest: function (oldEmployee, newEmployee, otherEmployee) {
        this
            .clickEmployee(oldEmployee)
            .editEmployee(newEmployee)
            .click('@saveButton')
            .clickEmployee(otherEmployee)
            .expect.element('@cardTitle').text.to.equal(otherEmployee).before(500)
        this
            .clickEmployee(newEmployee.name)
            .expect.element('@cardTitle').text.to.equal(newEmployee.name).before(500)
        this.expect.element('@nameField').value.to.equal(newEmployee.name)
        this.expect.element('@phoneField').value.to.equal(newEmployee.phone)
        this.expect.element('@titleField').value.to.equal(newEmployee.title)
        this.expect.element('@emailField').value.to.equal(newEmployee.email)


        return this
    },
}


module.exports = {
    url: 'https://devmountain-qa.github.io/employee-manager-v2/build/index.html',
    commands: [employeeManagerCommands],
    elements: {
        addButton: 'li[name="addEmployee"]',
        newEmployee: {
            selector: '//li[text()="New Employee"]',
            locateStrategy: 'xpath'
        },
        employeeID: {
            selector: '//span[@name="employeeID"]',
            locateStrategy: 'xpath'
        },
        cardTitle: '#employeeTitle',
        nameField: 'input[name="nameEntry"]',
        phoneField: 'input[name="phoneEntry"]',
        titleField: 'input[name="titleEntry"]',
        emailField: 'input[name="emailEntry"]',
        saveButton: '#saveBtn'
    },
    
    // var: lilianaVess = {
    //     name: "Liliana Vess",
    //     phone: "1258749630",
    //     title: "Necromancer"
    // },

}