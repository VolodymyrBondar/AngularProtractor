(function () {

    var VkLoginPage = function () {
        browser.driver.get('https://vk.com');
    };
    var VkHomePage = require('./VkHomePage.js');

    VkLoginPage.prototype = Object.create({}, {

        login: {
            value: "someemail"
        },

        password: {
            value: "somepassword"
        },
        pageTitle: {
            value: "Welcome! | VK"
        },
        loginField: {
            get: function () {
                return browser.driver.findElement(by.id("quick_email"));
            }
        },
        passwordField: {
            get: function () {
                return browser.driver.findElement(by.id("quick_pass"));
            }
        },
        submitButton: {
            get: function () {
                return browser.driver.findElement(by.id("quick_login_button"));
            }
        },
        loginTo: {
            value: function (login, password) {
                this.loginField.sendKeys(login);
                this.passwordField.sendKeys(password);
                return this.submitButton.click();
            }
        }
    });

    module.exports = VkLoginPage;

})();