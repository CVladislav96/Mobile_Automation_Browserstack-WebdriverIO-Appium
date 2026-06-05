const { expect } = require('@wdio/globals');
const { completeOnboarding, searchArticle, closeBtnFromArticle } = require('../utils/helper');

describe('TC-04: Save Article to Reading List', () => {
  it('should save article to reading list', async () => {

    await completeOnboarding();
    await searchArticle('Python programming');

   const firstResult = await $('android=new UiSelector().className("android.view.View").instance(2)');
   await firstResult.click();
   await browser.pause(3000);

   await closeBtnFromArticle();

    const saveBtn = await $(
      'android=new UiSelector().description("Save")'
    );
    await saveBtn.click();
    await browser.pause(3000);

    const backBtn = await $('android=new UiSelector().description("Navigate up")');
    await backBtn.click();
    await backBtn.click();

    const savedBtn = await $(
      'android=new UiSelector().resourceId("org.wikipedia.alpha:id/nav_tab_reading_lists")'
    );
    await savedBtn.click();
    await browser.pause(3000);

    const savedTab = await $(
      '//androidx.recyclerview.widget.RecyclerView[@resource-id="org.wikipedia.alpha:id/recycler_view"]/android.view.ViewGroup'
    );
    await savedTab.click();
    await browser.pause(1500);

    const savedItem = await $(
      'android=new UiSelector().className("android.widget.FrameLayout").instance(0)'
    );
    await expect(savedItem).toBeDisplayed();
  });
});