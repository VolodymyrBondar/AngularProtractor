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
        loginPage.loginTo(loginPage.login,loginPage.password);
        homePage.goToMyMusic();
        myMusicPage.goToMyAlbums();
        myMusicPage.createNewAlbum();
        myMusicPage.enterNewAlbumName(myMusicPage.newAlbumName);
        myMusicPage.searchMusicForNewAlbum(myMusicPage.artistName);
        myMusicPage.selectSongsForNewAlbum();
        myMusicPage.saveAlbum();
    });

    afterEach(function () {
        browser.sleep(1000);
    });

} )
