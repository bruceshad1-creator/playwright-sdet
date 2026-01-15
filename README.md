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

### Debugging Tests

Playwright Inspector is a GUI tool that helps author and debug Playwright scripts.

1. To run test in debug mode, run the following command as described above:
```bash
   npx playwright test --headed --debug
```
   
Preferred way to debug one particular test is to use `test.only` in your test
Learn more about [debugging](https://playwright.dev/docs/debug)

### Running Codegen

Playwright comes with the ability to generate tests out of the box and is a great way to quickly get started with testing.
It will open two windows, a browser window where you interact with the website you wish to test and the Playwright Inspector window where you can record your tests, copy the tests, clear your tests as well as change the language of your tests.
```bash
  npx playwright codegen {URL}
```
Learn more about [Test Generator](https://playwright.dev/docs/codegen-intro#running-codegen)

### Working with tsconfig.json

`tsconfig.json` - is the main ts config file. Learn more here ['What is a tsconfig.json'](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

Playwright test support tsconfig path mapping from the box.
Learn more here ['tsconfig path mapping'](https://playwright.dev/docs/test-typescript#tsconfig-path-mapping)

Mappings:
```ts
"paths": {
      "@page-manager-fixture": ["src/shared/fixtures/page-manager.fixture.ts"]
```

To get pkl into yml file run:
```bash
  pkl eval rio.pkl > ci.yml
```

### Conclusion

Congratulations! You should now have a local development environment set up and be ready.


Happy coding!