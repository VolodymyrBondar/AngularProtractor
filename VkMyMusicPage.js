(function () {

    var VkMyMusicPage = function() {

    };
    VkMyMusicPage.prototype = Object.create({}, {
        newAlbumName: {
            value: "Louis Armstrong"
        },
        artistName: {
          value: "Louis Armstrong"
        },

        myAlbumsButton: {
            get: function() {
                return browser.driver.findElement(by.xpath(".//*[@id='audios_albums']/div[1]"));
            }
        },
        createAlbumButton: {
          get: function() {
              return browser.driver.findElement(by.id("album_add"));
          }
        },
        newAlbumNameField: {
          get: function() {
              return browser.driver.findElement(by.id("album_name"));
          }
        },
        newAlbumSongSearchField: {
            get: function() {
                return browser.driver.findElement(by.xpath(".//*[@id='box_layer']/div[2]/div/div[2]/div/div[2]/div[4]/div/input"));
            }
        },
        albumList: {
            get: function() {
                browser.driver.sleep(1000);
                return browser.driver.findElements(by.css("[class='olist audio_album']"));
            }
        },
        artistName: {
            get: function() {
                return albumList.findElements(by.css(""))
            }
        },

        goToMyAlbums: {
            value: function() {
                browser.driver.sleep(1000);
                return this.myAlbumsButton.click();
            }
        },

        createNewAlbum: {
            value: function() {
                browser.driver.sleep(1000);
                return this.createAlbumButton.click();
            }
        },
        enterNewAlbumName: {
            value: function(newAlbumName) {
                browser.driver.sleep(1000);
                return this.newAlbumNameField.sendKeys(newAlbumName);
            }
        },
        searchMusicForNewAlbum: {
            value: function(song) {
                return this.newAlbumSongSearchField.sendKeys(song);
            }
        },
        selectSongsForNewAlbum: {
            value: function() {
                var album;
                for(var i=0; i < this.albumList.length; i++){
                    album = this.albumList[i];
                    return album.click();
                }
            }
        }
    })
    module.exports = VkMyMusicPage;
})();