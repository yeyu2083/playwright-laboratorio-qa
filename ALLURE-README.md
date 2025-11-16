# Allure reports — Playwright

This project is configured to produce Allure results in `allure-results` using the `allure-playwright` reporter.

Steps to install and generate reports locally:

1. Install the required dev dependencies:

```bash
npm install -D allure-playwright @shelex/allure-commandline
```

2. Run tests to populate `allure-results`:

```bash
npm test
# or run for a specific browser
npm run test:chromium
npm run test:firefox
```

3. Generate the Allure HTML report and open it:

```bash
npm run allure:generate
npm run allure:open
```

Notes:
- The `allure-playwright` package provides a reporter that writes results into `allure-results`.
- `@shelex/allure-commandline` contains the `allure` binary used to generate and open HTML reports.
- If `npx allure open` fails on Windows, make sure the `allure` binary is on PATH or use the `npx` wrapper as in the scripts above.
