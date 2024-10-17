const { test, expect } = require('@playwright/test');

test.describe('Twelve-Factor App Page', () => {
  test('correct_title', async ({ page }) => {
    await page.goto('https://anneryshc.github.io/is373_devops_hexo/Twelve%E2%80%90Factor-App/');
    await expect(page).toHaveTitle('Twelve Factor App | DevOps-Journey');
  });

  test('check_for_heading', async ({ page }) => {
    await page.goto('https://anneryshc.github.io/is373_devops_hexo/Twelve%E2%80%90Factor-App/');
    const heading = await page.locator('h1.article-title');
    await expect(heading).toHaveText('Twelve Factor App');
  });

  test('check_for_factors', async ({ page }) => {
    const factors = [
      { name: 'Codebase', selector: 'strong:has-text("Codebase")' },
      { name: 'Dependencies', selector: 'strong:has-text("Dependencies")' },
      { name: 'Config', selector: 'strong:has-text("Config")' },
      { name: 'Backing Services', selector: 'strong:has-text("Backing Services")' },
      { name: 'Build, Release, Run', selector: 'strong:has-text("Build, Release, Run")' },
      { name: 'Processes', selector: 'strong:has-text("Processes"):not(:has-text("Admin Processes"))' }, // Avoids conflict with "Admin Processes"
      { name: 'Port Binding', selector: 'strong:has-text("Port Binding")' },
      { name: 'Concurrency', selector: 'strong:has-text("Concurrency")' },
      { name: 'Disposability', selector: 'strong:has-text("Disposability")' },
      { name: 'Dev/Prod Parity', selector: 'strong:has-text("Dev/Prod Parity")' },
      { name: 'Logs', selector: 'strong:has-text("Logs")' },
      { name: 'Admin Processes', selector: 'strong:has-text("Admin Processes")' } // Explicit for Admin Processes
    ];

    await page.goto('https://anneryshc.github.io/is373_devops_hexo/Twelve%E2%80%90Factor-App/');
    
    for (const factor of factors) {
      const factorElement = await page.locator(factor.selector);
      await expect(factorElement).toBeVisible({ timeout: 7000 });
    }
  });

  test('check_for_images', async ({ page }) => {
    await page.goto('https://anneryshc.github.io/is373_devops_hexo/Twelve%E2%80%90Factor-App/');
    const image = await page.locator('img[src*="b6368f23-64ec-4e26-96e5-ea1b8b4b17d6"]');
    await expect(image).toBeVisible();
  });
});
