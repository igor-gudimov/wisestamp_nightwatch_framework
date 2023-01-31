describe('Apps', function() {
    const data = require('../testData.js');

    it('Apps Test Case №3', function(browser) {
      const detailsSection = browser.page.detailsSection();
      const editorMenuTab = browser.page.editorMenuTab();
      const appsSection = browser.page.appsSection();
      const videoAppWindow = browser.page.videoAppWindow();
      const mainPreviewPanel = browser.page.mainPreviewPanel();
      
      browser.navigateTo(browser.launchUrl);
      detailsSection.enterName(data.name);
      editorMenuTab.clickAppsSectionButton();
      appsSection.clickVideoAppButton();
      videoAppWindow
        .checkVideoWindowOpened(data.videoPageTitle)
        .checkAddButtonUnclickable()
        .enterVideoUrl(data.videoURL)
        .checkAddButtonUnclickable()
        .enterVideoTitle(data.videoTitle)
        .checkAddButtonClickable()
        .checkVideoPreviewIsUpdated(data.videoURL, data.videoTitle)
        .clickAddButton()
        .checkVideoWindowClose();
      mainPreviewPanel.checkVideoPreviewIsUpdated(data.videoURL, data.videoTitle);
      browser.end();
    });
  });