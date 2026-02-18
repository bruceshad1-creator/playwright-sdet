import fs from 'fs';
import { Page } from '@playwright/test';

export async function mockPage(page: page, pg: string): Promise<Page> {
  const img1 = fs.readFileSync('data/profile.png', 'base64');
  const img2 = fs.readFileSync('data/LI-Logo.png', 'base64');

  await page.context().route(`**${pg.toLowerCase()}.com/**`, route =>
    route.fulfill({
      status: 200,
      contentType: 'text/html',
      body: `
            <html>
              <body style="
                margin:0;
                height:100vh;
                display:flex;
                justify-content:center;
                align-items:center;
                font-family: Arial, sans-serif;
                background:#f4f6f8;
              ">
                <div style="text-align:center;">
                  <img width="200" src="data:image/png;base64,${img1}"/>
                  <h3>LinkedIn Mocked!</h3>
                  <img width="500" src="data:image/png;base64,${img2}"/>
                  <h1>Bruce Shad</h1>
                  <h3>Senior Software Development Engineer in Test (SDET)</h3>
                </div>
              </body>
            </html>
          `
    })
  );

  const popupPromise = page.waitForEvent('popup');
  await page.getByRole('link', { name: `${pg}` }).click();

  return await popupPromise;
}