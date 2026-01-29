import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 20 : 20,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects. See https://playwright.dev/docs/api/class-testoptions. */
  timeout: 60000, // 1 minute for all tests
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    //     baseURL: 'http://localhost:3000',

    actionTimeout: 60000, // 60 seconds for clicks/fills
    navigationTimeout: 120000, // 2 min for navigation

    /* https://playwright.dev/docs/test-use-options#recording-options */
    // Capture screenshot after each test failure.
    screenshot: 'only-on-failure',
    // Record trace only when retrying a test for the first time.
    trace: 'on-first-retry',
    // Record video only when retrying a test for the first time.
    video: 'on-first-retry'
  },
  /* Configure projects for major browsers */
  projects: [
    { name: 'Chrome',  use: { browserName: 'chromium', ...devices['Desktop Chrome'] } },
//     { name: 'Firefox', use: { browserName: 'firefox', ...devices['Desktop Firefox'] } },
    { name: 'Safari',  use: { browserName: 'webkit', ...devices['Desktop Safari'] } },
    { name: 'iPhone 15',  use: { browserName: 'webkit', ...devices['iPhone 15'] } },
    { name: 'iPad Pro 12.9',  use: { browserName: 'webkit', ...devices['iPad Pro 12.9'] } },
//     {
//       name: 'mySiteScenarios',
//       use: { browserName: 'chromium', ...devices['Desktop Chrome'] },
//     },
//     {
//       name: 'mySiteScenarios',
//       use: { browserName: 'webkit', ...devices['iPhone 15'] },
//     },
  ],

  /* Run your local dev server before starting the tests */
//   webServer: {
//     command: 'npm run start',
//     url: 'http://localhost:3000',
//     reuseExistingServer: !process.env.CI,
//   },
});
