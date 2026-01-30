# playwright-sdet
A framework written in TS using Playwright.
More about Playwright's features [here](https://playwright.dev/docs/intro).

### Prerequisites

Make sure you have the following software installed on your machine:

- Node.js (version 22.15.0 or later)
- npm 10 x
- Git
- brew

### Setup Instructions

1. Clone the project repository:
```bash (Unix shell)
   git clone https://github.com/bruceshad1-creator/playwright-sdet.git
```
   
2. Install project dependencies:
```bash
   npm install
```
   
3. Install playwright dependencies:
```bash
   npx playwright install
```

4. Run some suite to test:
```bash
   npx playwright test
```

### Project Structure

Key directories and their purposes:

- **pages**: Contains the Page Objects used in tests.
- **components**: Contains the locators and verification methods for tests.
- **shared**: Contains shared helpers, page objects and features functions.

#### Page object - entity that represent page, that has url, accept Page in constructor
#### Page component - entity that represent part and elements of page and can be used on many pages


### Writing Tests

This is Playwright Test project, which follows the Page Object
pattern and Page Components to write tests. These pattern promotes code
reusability and maintainability by encapsulating the interaction with
web pages and reusable components on that pages.

Page objects can be found inside the fixtures to import:
```bash
  @page-manager-fixture
```

---------------------------------------------------------------

### Debugging Tests

Playwright Inspector is a GUI tool that helps author and debug Playwright scripts.

1. To run test in debug mode, run the following command as described above:
```bash
   npx playwright test --headed --debug
```
   
Preferred way to debug one particular test is to use `test.only` in your test
Learn more about [debugging](https://playwright.dev/docs/debug)

---------------------------------------------------------------

### Running Codegen

Playwright comes with the ability to generate tests out of the box and is a great way to quickly get started with testing.
It will open two windows, a browser window where you interact with the website you wish to test and the Playwright Inspector window where you can record your tests, copy the tests, clear your tests as well as change the language of your tests.
```bash
  npx playwright codegen {URL}
```
Learn more about [Test Generator](https://playwright.dev/docs/codegen-intro#running-codegen)

---------------------------------------------------------------

### Working with tsconfig.json

`tsconfig.json` - is the main ts config file. Learn more here ['What is a tsconfig.json'](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

Playwright test support tsconfig path mapping from the box.
Learn more here ['tsconfig path mapping'](https://playwright.dev/docs/test-typescript#tsconfig-path-mapping)

Mappings:
```ts
  "paths": {
      "@page-manager-fixture": ["src/shared/fixtures/page-manager.fixture.ts"]
```

---------------------------------------------------------------

# Playwright CI (Native + Docker)
The Playwright test in this project is setup using a hybrid execution model:
* Fast **native smoke tests** for PR validation
* Full **regression coverage** using **native + Docker**
* 🐳 Dockerized execution for **WebKit and mobile**

## High-Level Test Strategy

### Smoke Tests
- Execution: Native (no Docker)
- Browser: Chrome only
- Scope: `@smoke`
- Purpose: Fast PR gate
- Required check: Yes

### Regression Tests
- Execution: Native + Docker
- Browsers / Devices:
    - Native → Chrome (desktop)
    - Docker → Safari (WebKit), iPhone, iPad
- Runs only if smoke passes

## GitHub Actions CI Workflow
### Triggers
- Push to `main` or `master`
- Pull requests
- Weekly scheduled run (Sunday 09:00 UTC)
```cron
0 9 * * 0
```

# Running Tests Locally (Docker)
## Build the Docker image
```bash
    docker build -t playwright-sdet:local .
```

## Run all tests
```bash
    docker run --rm \
  -e CI=true \
  -e PW_HEADLESS=1 \
  -v "$(pwd)/downloads:/app/downloads" \
  playwright-sdet:local
```

## Run a specific project
```bash
    docker run --rm \
  -e CI=true \
  -e PW_HEADLESS=1 \
  -v "$(pwd)/downloads:/app/downloads" \
  playwright-sdet:local \
  npx playwright test --project="iPhone 15"
```
* --rm stands for “remove”, and when used, Docker automatically deletes the container after it stops.
This keeps the system clean and avoids leftover stopped containers piling up.

# Running Tests in CI/CD (CI + Docker)
* Configuration: ~/playwright-sdet/.github/workflows/ci.yml

---------------------------------------------------------------

# BrowserStack
Playwright tests can also run on real browsers and devices hosted on BrowserStack’s cloud.

## Prerequisites
* Node.js
* BrowserStack account
* Playwright

Set BrowserStack credentials:
```bash
  export BROWSERSTACK_USERNAME=your_username
  export BROWSERSTACK_ACCESS_KEY=your_access_key
```

Browser, OS, and device configuration is defined in the Playwright configuration using BrowserStack capabilities.
* ~/playwright-sdet/browserstack.yml contains the configurations.

```Sample from: ~/playwright-sdet/browserstack.yml
  # macOS – WebKit (desktop Safari)
  - os: OS X
    osVersion: Ventura
    browserName: playwright-webkit
    browserVersion: latest
```

## Run Tests on BrowserStack (CI / Cloud)
Run Playwright tests:
```bash
  npm run test:browserstack
```

Executing tests show directly against BrowserStack’s cloud browsers and devices on below Url.
[Test Run](https://automation.browserstack.com/projects/BrowserStack+playwright-sdet/builds/browserstack+build/4?tab=tests&testListView=flat&public_token=265d1dfa1f23da5b33be239e4d8be357bd09e14d7725a81593adfed6fd3257f8)

## Notes
* Browsers and devices run entirely in BrowserStack’s cloud.
* No local browser or device setup required.
* Ideal for Safari, mobile, and cross-browser testing
* Supports parallel execution
* Real device testing (iOS / Android)
* Cross-browser validation
* Cloud-based CI execution
* Large-scale regression testing

---------------------------------------------------------------

### Conclusion
Congratulations! You should now have a local development environment set up and be ready.
Happy coding!