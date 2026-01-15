import { Page } from '@playwright/test';
import { ProfilePage } from './ProfilePage';

export class POManager {
    readonly profilePage: ProfilePage;

    constructor(page: Page) {
        this.profilePage = new ProfilePage(page);
    }
}