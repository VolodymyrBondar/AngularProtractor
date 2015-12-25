(function () {

    var VkHomePage = function() {

    };
    VkHomePage.prototype = Object.create({}, {
        myMusicButton: {
            get: function() {
                return browser.driver.findElement(by.xpath(".//*[@id='side_bar']/ol/li[5]/a/span/span[2]"));
            }
        },
        goToMyMusic: {
            value: function() {
                return this.myMusicButton.click();
            }
        }
    })
    module.exports = VkHomePage;
})();