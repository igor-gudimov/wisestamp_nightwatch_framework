describe('Apps', function() {
    const data = require('../testData.js')

    it('Apps Test Case №3', function(browser) {
      browser
        .url(browser.launchUrl)
        .setValue('input[id=details__name_input]', data.name)
        .click('div[tab-name=ws-addons]')
        .click('div[addon-id=youtube_status]')
        
        .waitForElementVisible('div[class=app__container] .app__title')
        .assert.textContains('div[class=app__container] .app__title', data.videoPageTitle)
        
        .assert.not.enabled('.btn.btn__add > button')
        .setValue('input[name=video_url]', data.videoURL)
        
        .assert.not.enabled('.btn.btn__add > button')
        .setValue('input[name=user_title]', data.videoTitle)
        .assert.enabled('.btn.btn__add > button')
        
        .waitForElementVisible('a[href="'+data.videoURL+'"]')
        .assert.textContains('td[style="text-align:left"] > span', data.videoTitle)

        .click('.btn.btn__add > button')

        .waitForElementNotPresent('div[class=app__container] .app__title')
        .waitForElementVisible('a[href="'+data.videoURL+'"]')
        .assert.textContains('td[style="text-align:left"] > span', data.videoTitle)

        .end();
    });
  });