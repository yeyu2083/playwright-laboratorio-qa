import { test, expect } from '@playwright/test';
test.describe('Playwright Community Ambassadors', () => {

   test('playwright.dev tiene Playwright en el título', async ({ page }, testInfo) => {
    testInfo.annotations.push({ type: 'site', description: 'https://playwright.dev/' });
    testInfo.annotations.push({ type: 'objective', description: 'Verificar que el título contiene Playwright' });
    testInfo.annotations.push({ type: 'category', description: 'Sitio principal Playwright' });
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
  });
  test('Ambassadors incluye a Carlos Gauto de Argentina', async ({ page }, testInfo) => {
    testInfo.annotations.push({ type: 'location', description: 'Berazategui, Argentina' });
    testInfo.annotations.push({ type: 'github', description: 'https://github.com/charlyautomatiza' });
    testInfo.annotations.push({ type: 'twitter', description: 'https://twitter.com/char_automatiza' });
    testInfo.annotations.push({ type: 'website', description: 'https://linktr.ee/charlyautomatiza' });
    await page.goto('https://playwright.dev/community/ambassadors');
    await expect(page.getByText('Carlos Gauto')).toBeVisible();
    await expect(page.getByText('Berazategui')).toBeVisible();
    await expect(page.getByText('Argentina')).toBeVisible();
  });

 

  test('Ambassadors incluye a Stefan Judis de Alemania', async ({ page }, testInfo) => {
    testInfo.annotations.push({ type: 'location', description: 'Berlín, Alemania' });
    testInfo.annotations.push({ type: 'github', description: 'https://github.com/stefanjudis' });
    testInfo.annotations.push({ type: 'twitter', description: 'https://twitter.com/stefanjudis' });
    testInfo.annotations.push({ type: 'website', description: 'https://www.stefanjudis.com' });
    await page.goto('https://playwright.dev/community/ambassadors');
    await expect(page.getByText('Stefan Judis')).toBeVisible();
    await expect(page.getByText('Berlin')).toBeVisible();
    await expect(page.getByText('Germany')).toBeVisible();
  });

});
