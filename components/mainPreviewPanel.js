const mainPreviewPanelCommands = {
    checkVideoPreviewIsUpdated(url, title) {
        this.waitForElementVisible('a[href="'+url+'"]')
        .assert.textContains('@videoTitlePreview', title);
        return this;
    }
};

module.exports = {
    url: function() { 
      return browser.launchUrl + '/editor'; 
    },
    commands: [
        mainPreviewPanelCommands
    ],
    elements: {
        videoTitlePreview: {
          selector: 'td[style="text-align:left"] > span'
        }
    }
};