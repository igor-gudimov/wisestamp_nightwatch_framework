const appsSectionCommands = {
    clickVideoAppButton() {
        this.click('@videoAppButton');
        return this;
    }
};

module.exports = {
    url: function() { 
      return browser.launchUrl + '/editor'; 
    },
    commands: [
        appsSectionCommands
    ],
    elements: {
        videoAppButton: {
          selector: 'div[addon-id=youtube_status]'
        }
      }
};