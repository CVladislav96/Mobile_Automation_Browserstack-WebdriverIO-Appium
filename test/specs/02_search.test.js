const { expect } = require('@wdio/globals');
const { completeOnboarding, searchArticle } = require('../utils/helper');

describe('TC-02: Search Article', () => {
  it('should find articles by search query', async () => {

    await completeOnboarding();
    await searchArticle('Appium');

    const firstResult = await $('android=new UiSelector().text("Appium")');
    await expect(firstResult).toBeDisplayed();
    await expect(firstResult).toHaveText(expect.stringContaining('Appium'));
  });
});