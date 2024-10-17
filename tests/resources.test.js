const { test, expect } = require('@playwright/test');

test.describe('Resources Page', () => {

  test('correct_title', async ({ page }) => {
    await page.goto('https://anneryshc.github.io/is373_devops_hexo/Resources/');
    await expect(page).toHaveTitle('Resources | DevOps-Journey');
  });

  test('check_for_article_links', async ({ page }) => {
    await page.goto('https://anneryshc.github.io/is373_devops_hexo/Resources/');

    const articleLinks = [
      'Your First Simple Docker Project: A Step-by-Step Guide for Beginners',
      'Containerization vs. Virtualization - Ubuntu Blog',
      'Kubernetes vs. Docker | Atlassian',
      'Horizontal Scaling vs. Vertical Scaling: Choosing Your Strategy | DigitalOcean'
    ];

    for (const link of articleLinks) {
      await expect(page.locator(`text=${link}`)).toBeVisible();
    }
  });
  

  test('check_for_methodology_links', async ({ page }) => {
    await page.goto('https://anneryshc.github.io/is373_devops_hexo/Resources/');

    const methodologyLinks = [
      'Twelve-Factor App Methodology - Wikipedia',
      'The Twelve-Factor App'
    ];

    for (const link of methodologyLinks) {
      await expect(page.locator(`text=${link}`)).toBeVisible();
    }
  });

  test('check_for_packaging_links', async ({ page }) => {
    await page.goto('https://anneryshc.github.io/is373_devops_hexo/Resources/');

    const packagingLinks = [
      'What is Software Packaging? | Advanced Installer',
      'Application Packaging | Thales Group',
      'What is a Software Package? | GeeksforGeeks'
    ];

    for (const link of packagingLinks) {
      await expect(page.locator(`text=${link}`)).toBeVisible();
    }
  });

  test('check_for_history_links', async ({ page }) => {
    await page.goto('https://anneryshc.github.io/is373_devops_hexo/Resources/');

    const historyLinks = [
      'A Long History of Virtualization | Serve The Home',
      'Virtualization - Wikipedia'
    ];

    for (const link of historyLinks) {
      await expect(page.locator(`text=${link}`)).toBeVisible();
    }
  });

});
