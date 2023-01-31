const detailsSectionCommands = {
    enterName(text) {
      this.setValue('@nameField', text);
      return this;
    }
};

module.exports = {
    url: function() { 
      return browser.launchUrl + '/editor'; 
    },
    commands: [
        detailsSectionCommands
    ],
    elements: {
        nameField: {
          selector: 'input[id=details__name_input]'
        }
      }
};