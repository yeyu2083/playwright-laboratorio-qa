const { test, expect } = require('@playwright/test');

test('playwright.dev tiene Playwright en el título', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
