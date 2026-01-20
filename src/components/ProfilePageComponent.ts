import { Page, Locator, expect } from '@playwright/test';
import { BaseComponent } from './BaseComponent';
import { readPDF } from '../shared/helpers/fileReader';
import fs from 'fs';

export type links =
    | 'Résumé'
    | 'Playwright_UI'
    | 'Jest_TCP'
    | 'Applications of Steganography'
    | 'LinkedIn'
    | 'GitHub'

export class ProfilePageComponent extends BaseComponent {
    private readonly page: Page;
    private readonly logo: Locator;
    private readonly aboutMeSection: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.logo = this.page.getByRole('img', { name: 'Logo' });
        this.aboutMeSection = this.page.locator('div').filter({ hasText: 'Senior Software Development' });
    }

    public async verifyPageVisibility(): Promise<void> {
        await this.verifyPageHeadersVisibility();
        await this.verifyPageLinksVisibility();
    }

    private async verifyPageHeadersVisibility(): Promise<void> {
        const headers: string[] = [
            'Bruce Shad',
            'About Me',
            'Projects & Publications',
            'Contact'
        ];
        for (const header of headers)
            await expect(await this.page.getByRole('heading', { name: header })).toBeVisible();

        await expect(await this.logo).toBeVisible();
        await expect(await this.aboutMeSection).toBeVisible();
        await this.verifyPageTextsVisibility();
    }

    private async verifyPageTextsVisibility(): Promise<void> {
        const texts: string[] = [
            'Senior Software Development Engineer in Test (SDET)',
            'bruceshad1@gmail.com',
            'Cellphone (415) 845 - 9033',
            '©2026 Bruce Shad'
        ];
        for (const text of texts)
            await expect(await this.page.getByText(text).first()).toBeVisible();
    }

    private async verifyPageLinksVisibility(count = 7): Promise<void> {
        const links: string[] = [
           'Résumé',
           'Playwright_UI',
           'Jest_TCP',
           'Applications of Steganography',
           'LinkedIn',
           'GitHub'
        ];
        for (const link of links)
           await expect(await this.page.getByRole('link', { name: link })).toBeVisible();
        await expect(this.page.getByText('👉 ')).toHaveCount(count);
    }

    public async verifyDownloadedPDF(): Promise<void> {
        const filePath = await this.downLoadFile();
        const text = await readPDF(filePath);

        expect(text).toContain('Professional Summary');
    }

    private async downLoadFile(): Promise<string> {
        await this.page.getByRole('link', { name: 'Résumé' }).click();
        const download = await this.page.waitForEvent('download');

        const filePath = `downloads/${download.suggestedFilename()}`;
        await download.saveAs(filePath);

        expect(fs.existsSync(filePath)).toBeTruthy();

        return filePath;
    }

    public async verifyLinkNavigation(link: links): Promise<void> {
        const [newPage] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.page.getByRole('link', { name: link }).click(),
        ]);
        await newPage.waitForLoadState();

        switch (link) {
            case 'Playwright_UI':
                await expect(newPage.url()).toContain('https://github.com/');
                await expect(newPage.locator('#repository-container-header').getByRole('link', { name: 'playwright-sdet' }))
                .toBeVisible();
                break;
            case 'Jest_TCP':
                await expect(newPage.url()).toContain('https://github.com/');
                await expect(newPage.locator('#repository-container-header').getByRole('link', { name: 'jest-sdet' }))
                .toBeVisible();
                break;
            case 'Applications of Steganography':
                await expect(newPage.url()).toContain('https://scholarworks.calstate.edu/');
//                 await expect(newPage.locator('.csu-campus-logo')
//                 .or(newPage.getByLabel('header').getByRole('link', { name: 'California State University' })).first())
//                 .toBeVisible();
                break;
            case 'LinkedIn':
                await expect(newPage.url()).toContain('https://www.linkedin.com/');
                await expect(newPage.getByRole('link', { name: 'LinkedIn' })
                .or(newPage.locator('a').filter({ hasText: 'LinkedIn' }).first()))
                .toBeVisible();
                break;
            case 'GitHub':
                await expect(newPage.url()).toContain('https://github.com/');
                await expect(newPage.getByRole('link', { name: 'View bruceshad1-creator\'s' })).toBeVisible();
                await newPage.getByRole('link', { name: 'View bruceshad1-creator\'s' }).click();
                await expect(newPage.getByRole('img')).toBeVisible();
                break;
        }
    }
}