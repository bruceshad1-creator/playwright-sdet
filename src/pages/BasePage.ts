import { Page } from '@playwright/test';

export class BasePage {
    readonly page: Page;
    readonly url: string | undefined;

    constructor(readonly page: Page) {
        this.page = page;
    }

    public async goTo(): Promise<void> {
        if (!this.url)
            throw new Error('Url is empty!');

        await this.page.goto(this.url);
        await this.page.waitForLoadState();
    }
}