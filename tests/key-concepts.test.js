import { test, expect } from '@playwright/test';

test('correct_title', async ({ page }) => {
    // Navigate to the Key Concepts page
    await page.goto('https://anneryshc.github.io/is373_devops_hexo/Key-Concepts/');
    
    // Verify the page title contains 'DevOps-Journey' (adjusted to actual title)
    await expect(page).toHaveTitle(/Key Concepts/);
});

test('check_for_subtitles', async ({ page }) => {
    // Navigate to the Key Concepts page
    await page.goto('https://anneryshc.github.io/is373_devops_hexo/Key-Concepts/');
    
    // Wait for the content to load
    await page.waitForLoadState('domcontentloaded');

    // Refined locators to target specific elements (e.g., headings)
    await expect(page.locator('h2:has-text("What is a Kernel?")')).toBeVisible();
    await expect(page.locator('h2:has-text("Thread/Threading")')).toBeVisible();
    await expect(page.locator('h2:has-text("Multi-threading")')).toBeVisible();
    await expect(page.locator('h2:has-text("Parallelization")')).toBeVisible();
});

test('check_for_kernel_definition', async ({ page }) => {
    // Navigate to the Key Concepts page
    await page.goto('https://anneryshc.github.io/is373_devops_hexo/Key-Concepts/');
    
    // Wait for the content to load
    await page.waitForLoadState('domcontentloaded');
  
    // Verify that the page contains the Kernel definition
    const content = await page.content();
    expect(content).toContain(
      'The Kernel is the core component of an operating system that manages system resources and allows software applications to interact with hardware.'
    );
});
