import { test, expect } from '@playwright/test';

test('correct_title', async ({ page }) => {
    // Navigate to the Docker page
    await page.goto('https://anneryshc.github.io/is373_devops_hexo/Docker/');
    
    // Verify the page title contains 'Docker'
    await expect(page).toHaveTitle(/Docker Setup/);
});

test('check_for_docker_definition', async ({ page }) => {
    // Navigate to the Docker page
    await page.goto('https://anneryshc.github.io/is373_devops_hexo/Docker/');
    
    // Wait for the content to load
    await page.waitForLoadState('domcontentloaded');
  
    // Verify that the page contains the Docker definition
    const content = await page.content();
    expect(content).toContain(
      'Docker is a platform that allows developers to create, deploy, and run applications inside lightweight, portable containers.'
    );
});
