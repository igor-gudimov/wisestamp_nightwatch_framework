describe('Apps', function() {
  
    it('Apps test', function(browser) {
      browser
        .url(browser.launchUrl)
        // .pause()
        // .setValue('input[type=search]', 'nightwatch')
        // .click('button[type=submit]')
        // .assert.textContains('.mainline-results', 'Nightwatch.js')
        .end();
    });
  });