import { Page } from '@playwright/test';
import { BasePage } from '../pages/BasePage';

export abstract class BaseComponent {
    readonly basePage: BasePage;

    constructor(page: Page) {
        this.basePage = page;
    }
}