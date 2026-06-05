async function completeOnboarding() {
    const nextBtn = await $('~Forward');

    if (await nextBtn.isDisplayed()) {
        await nextBtn.click();
        await nextBtn.click();
        await nextBtn.click();
        await browser.pause(1000);
    }

    const skipBtn = await $('android=new UiSelector().text("Skip")');
    if (await skipBtn.isDisplayed()) {
        await skipBtn.click();
        await browser.pause(1000);
    }
}


async function searchArticle(query) {
    const searchBar = await $(
      'android=new UiSelector().resourceId("org.wikipedia.alpha:id/nav_tab_search")'
      );
    await searchBar.click();

    const searchInput = await $(
      '//androidx.cardview.widget.CardView[@resource-id="org.wikipedia.alpha:id/search_card"]'
      );
    await searchInput.waitForDisplayed({ timeout: 5000 });
    await searchInput.click();

    const inputField = await $(
      '//android.widget.AutoCompleteTextView[@resource-id="org.wikipedia.alpha:id/search_src_text"]'
      );
    await inputField.waitForDisplayed({ timeout: 5000 });
    await inputField.setValue(query);
    await browser.pause(2000);
}

async function closeBtnFromArticle() {
    const closeBtn = await $('android=new UiSelector().description("Close")');
    await closeBtn.click();

    const closeBtnMiniWin = await $('//android.widget.ImageView[@content-desc="Close"]');
    await closeBtnMiniWin.click();
}

module.exports = { completeOnboarding, searchArticle, closeBtnFromArticle };