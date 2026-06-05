const { expect } = require('@wdio/globals');
const { completeOnboarding, searchArticle, closeBtnFromArticle } = require('../utils/helper');

describe('TC-03: Open Article', () => {
  it('should open article and display content', async () => {

    await completeOnboarding();
    await searchArticle('JavaScript');

    const firstResult = await $('android=new UiSelector().className("android.view.View").instance(2)');
    await firstResult.click();
    await browser.pause(3000);

    await closeBtnFromArticle();

    const contents = await $(
      '//android.webkit.WebView[@resource-id="org.wikipedia.alpha:id/page_web_view"]'
    );
   await contents.waitForDisplayed({ timeout: 15000 });
   await expect(contents).toBeDisplayed();
  });
});