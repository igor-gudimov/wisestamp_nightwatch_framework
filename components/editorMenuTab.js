const editorMenuTabCommands = {
    clickAppsSectionButton() {
      this.click('@appsSectionButton');
      return this;
    }
};

module.exports = {
    url: function() { 
      return browser.launchUrl + '/editor'; 
    },
    commands: [
        editorMenuTabCommands
    ],
    elements: {
        detailsSectionButton: {
          selector: 'div[tab-name=ws-details]'
        },
        appsSectionButton: {
          selector: 'div[tab-name=ws-addons]'
        }
      }
};