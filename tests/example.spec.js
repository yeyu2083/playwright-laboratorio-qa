import { test, expect } from '@playwright/test';

test('playwright.dev tiene Playwright en el título', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

test('Ambassadors incluye a Carlos Gauto de Argentina', async ({ page }) => {
  await page.goto('https://playwright.dev/community/ambassadors');
  // Espera a que el nombre Carlos Gauto esté visible
  await expect(page.getByText('Carlos Gauto')).toBeVisible();
  // Verifica que la ubicación sea Argentina
  await expect(page.getByText('Argentina')).toBeVisible();
});
