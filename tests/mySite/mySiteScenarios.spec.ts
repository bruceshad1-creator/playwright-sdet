import { test } from '@page-manager-fixture';

test.setTimeout(180000);
test('Test 1: Verify visibility of basic elements', async ({ pageManager }, testInfo) => {
    const { profilePage } = pageManager;
    const browserName = testInfo.project.name;
    console.log(`[${browserName}] > ${testInfo.title}`);

    await test.step('Step 1: Go to the site', async () => {
        await profilePage.goTo();
    });

    await test.step('Step 2: Verify visibility of basic elements', async () => {
        await profilePage.profilePageComponent.verifyPageVisibility();
    });
});

test('Test 2: Verify Résumé download', async ({ pageManager }, testInfo) => {
    const { profilePage } = pageManager;
    const browserName = testInfo.project.name;
    console.log(`[${browserName}] > ${testInfo.title}`);

    await test.step('Step 1: Go to the site', async () => {
        await profilePage.goTo();
    });

    await test.step('Step 2: Verify Résumé downloads successfully', async () => {
        await profilePage.profilePageComponent.verifyDownloadedPDF();
    });
});

test('Test 3: Verify navigation of Playwright_UI link', async ({ pageManager }, testInfo) => {
    const { profilePage } = pageManager;
    const browserName = testInfo.project.name;
    console.log(`[${browserName}] > ${testInfo.title}`);

    await test.step('Step 1: Go to the site', async () => {
        await profilePage.goTo();
    });

    await test.step('Step 2: Verify navigation of Playwright_UI link', async () => {
        await profilePage.profilePageComponent.verifyLinkNavigation('Playwright_UI');
    });
});

test('Test 4: Verify navigation of BrowserStack link', async ({ pageManager }, testInfo) => {
    const { profilePage } = pageManager;
    const browserName = testInfo.project.name;
    console.log(`[${browserName}] > ${testInfo.title}`);

    await test.step('Step 1: Go to the site', async () => {
        await profilePage.goTo();
    });

    await test.step('Step 2: Verify navigation of BrowserStack link', async () => {
        await profilePage.profilePageComponent.verifyLinkNavigation('BrowserStack');
    });
});

test('Test 5: Verify navigation of Jest_TCP link', async ({ pageManager }, testInfo) => {
    const { profilePage } = pageManager;
    const browserName = testInfo.project.name;
    console.log(`[${browserName}] > ${testInfo.title}`);

    await test.step('Step 1: Go to the site', async () => {
        await profilePage.goTo();
    });

    await test.step('Step 2: Verify navigation of Jest_TCP link', async () => {
        await profilePage.profilePageComponent.verifyLinkNavigation('Jest_TCP');
    });
});

test('Test 6: Verify navigation of Publication link', async ({ pageManager }, testInfo) => {
    const { profilePage } = pageManager;
    const browserName = testInfo.project.name;
    console.log(`[${browserName}] > ${testInfo.title}`);

    await test.step('Step 1: Go to the site', async () => {
        await profilePage.goTo();
    });

    await test.step('Step 2: Verify navigation of Publication link', async () => {
        await profilePage.profilePageComponent.verifyLinkNavigation('Applications of Steganography');
    });
});

test('Test 7: Verify navigation of LinkedIn link', async ({ pageManager }, testInfo) => {
    const { profilePage } = pageManager;
    const browserName = testInfo.project.name;
    console.log(`[${browserName}] > ${testInfo.title}`);

    await test.step('Step 1: Go to the site', async () => {
        await profilePage.goTo();
    });

    await test.step('Step 2: Verify navigation of LinkedIn link', async () => {
        await profilePage.profilePageComponent.verifyLinkNavigation('LinkedIn');
    });
});

test('Test 8: Verify navigation of GitHub link', async ({ pageManager }, testInfo) => {
    const { profilePage } = pageManager;
    const browserName = testInfo.project.name;
    console.log(`[${browserName}] > ${testInfo.title}`);

    await test.step('Step 1: Go to the site', async () => {
        await profilePage.goTo();
    });

    await test.step('Step 2: Verify navigation of GitHub link', async () => {
        await profilePage.profilePageComponent.verifyLinkNavigation('GitHub');
    });
});

