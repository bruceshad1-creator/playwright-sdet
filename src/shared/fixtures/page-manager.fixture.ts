import { test as base } from '@playwright/test';
import { POManager } from '../../pages/PageObject.manager';

type POManagerFixture = {
    readonly pageManager: POManager;
} & Readonly<POManager>;

export const test = base.extend<POManagerFixture> ({
    pageManager: async({page}, use) => {
        await use(new POManager(page));
    }
});

export { expect } from '@playwright/test';