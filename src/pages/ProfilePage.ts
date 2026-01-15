import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { ProfilePageComponent } from '../components/ProfilePageComponent';

export class ProfilePage extends BasePage {
    readonly url: string = 'https://bruceshad1-creator.github.io/bruceshad.github.io/';
    readonly profilePageComponent: ProfilePageComponent;

    constructor(readonly page: Page) {
        super(page);
        this.profilePageComponent = new ProfilePageComponent(page);
    }
}