const { expect } = require('@wdio/globals');
const { completeOnboarding } = require('../utils/helper');

describe('TC-05: Add Spanish Language', () => {
  it('should add Spanish language to Wikipedia', async () => {

    await completeOnboarding();

    const moreTab = await $(
      'android=new UiSelector().className("android.view.View").instance(7)'
    );
    await moreTab.click();
    await browser.pause(1000);

    const manageBtn = await $(
      'android=new UiSelector().className("android.view.View").instance(5)'
    );
    await manageBtn.click();
    await browser.pause(1000);

    const addLanguageBtn = await $(
      'android=new UiSelector().className("android.widget.LinearLayout").instance(4)'
    );
    await addLanguageBtn.click();
    await browser.pause(1000);

    const selectedSpanish = await $(
      'android=new UiSelector().className("android.view.View").instance(3)'
    );
    await selectedSpanish.click();
    await browser.pause(1000);

    const addedLanguage = await $(
      'android=new UiSelector().text("Español")'
    );
    await expect(addedLanguage).toBeDisplayed();
  });
});