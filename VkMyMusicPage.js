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
                return browser.driver.findElements(by.css(".olist.audio_album>div"));
            }
        },
        saveAlbumButton: {
            get: function() {
                return browser.driver.findElement(by.css(".flat_button"));
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
                this.albumList.then(function(resp){
                    for(var i=0; i < resp.length; i++){
                        resp[i].click();
                    }
                })
            }
        },
        saveAlbum: {
            value: function() {
                return this.saveAlbumButton.click();
            }
        }
    })
    module.exports = VkMyMusicPage;
})();