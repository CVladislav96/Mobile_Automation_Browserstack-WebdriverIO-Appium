const { expect } = require('@wdio/globals');
const { completeOnboarding } = require('../utils/helper');

describe('TC-01: Launch App', () => {
  it('should show main screen with search bar', async () => {

    await completeOnboarding();

    const searchBar = await $(
      'android=new UiSelector().text("Search")'
    );
    await expect(searchBar).toBeDisplayed();

    const wordmark = await $(
      'android=new UiSelector().className("android.view.View").instance(2)'
    );
    await expect(wordmark).toBeDisplayed();
  });
});