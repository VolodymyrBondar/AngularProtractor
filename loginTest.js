var VkLoginPage = require('./VkLoginPage.js');
var VkHomePage = require('./VkHomePage.js');
var VkMyMusicPage = require('./VkMyMusicPage.js');

describe('vk homepage', function() {
    var loginPage = new VkLoginPage();
    var homePage = new VkHomePage();
    var myMusicPage = new VkMyMusicPage();

    beforeEach(function () {
        browser.driver.ignoreSynchronization = true;
    });

    it('should have a title', function (){
        browser.driver.getTitle().then(function(title){
            expect(title).toEqual(loginPage.pageTitle);
        })
    });

    it('should create album', function() {
        loginPage.loginTo(loginPage.login,loginPage.password)
            .then(function() {
                return homePage.goToMyMusic();
            })
            .then(function(){
                return myMusicPage.goToMyAlbums();
            })
            .then(function() {
                return myMusicPage.createNewAlbum();
            })
            .then(function(){
                return  myMusicPage.enterNewAlbumName(myMusicPage.newAlbumName);
            })
            .then(function(){
                return myMusicPage.searchMusicForNewAlbum(myMusicPage.artistName);
            })
            .then(function(){
                return console.log(myMusicPage.albumList.count);
            })
    });



    //it('should go to MyMusic page', function() {
    //    page.loginTo(page.login,page.password);
    //    page = new VkHomePage;
    //    page.goToMyMusic;
    //    browser.driver.sleep(1000);
    //})

    afterEach(function () {
        browser.sleep(1000);
    });

} )
