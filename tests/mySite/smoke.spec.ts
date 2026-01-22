import { test } from '@page-manager-fixture';

test('Test 1: Smoke - Verify visibility of About Me section', async ({ pageManager }, testInfo) => {
    const { profilePage } = pageManager;
    const browserName = testInfo.project.use.browserName;
    console.log(`[${browserName}] > ${testInfo.title}`);

    await test.step('Step 1: Go to the site', async () => {
        await profilePage.goTo();
    });

    await test.step('Step 2: Verify visibility of About Me section', async () => {
        await profilePage.profilePageComponent.verifyPageVisibility(true);
    });
});