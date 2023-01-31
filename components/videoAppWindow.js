const videoAppWindowCommands = {
    checkVideoWindowOpened(title) {
        this.waitForElementVisible('@videoAppWindowTitle')
        .assert.textContains('@videoAppWindowTitle', title);
        return this;
    },
    checkAddButtonUnclickable() {
        this.assert.not.enabled('@addButton');
        return this;
    },
    enterVideoUrl(data) {
        this.setValue('@videoUrlField', data);
        return this;
    },
    enterVideoTitle(data) {
        this.setValue('@videoTitleField', data);
        return this;
    },
    checkAddButtonClickable() {
        this.assert.enabled('@addButton');
        return this;
    },
    checkVideoPreviewIsUpdated(url, title) {
        this.waitForElementVisible('a[href="'+url+'"]')
        .assert.textContains('@videoTitlePreview', title);
        return this;
    },
    clickAddButton() {
        this.click('@addButton');
        return this;
    },
    checkVideoWindowClose() {
        this.waitForElementNotPresent('@videoAppWindowTitle');
        return this;
    }
};

module.exports = {
    url: function() { 
      return browser.launchUrl + '/editor'; 
    },
    commands: [
        videoAppWindowCommands
    ],
    elements: {
        videoAppWindowTitle: {
          selector: 'div[class=app__container] .app__title'
        },
        addButton: {
          selector: '.btn.btn__add > button'
        },
        videoUrlField: {
          selector: 'input[name=video_url]'
        },
        videoTitleField: {
          selector: 'input[name=user_title]'
        },
        videoTitlePreview: {
          selector: 'td[style="text-align:left"] > span'
        }
    }
};