const { test, expect } = require('@playwright/test');

test.describe('Scaling Strategies Page', () => {

  test('correct_title', async ({ page }) => {
    await page.goto('https://anneryshc.github.io/is373_devops_hexo/Scaling-Strategies/');
    await expect(page).toHaveTitle(/Scaling Strategies/);
  });

  test('check_for_table_headings', async ({ page }) => {
    await page.goto('https://anneryshc.github.io/is373_devops_hexo/Scaling-Strategies/');
    const content = await page.content();
    expect(content).toContain('Horizontal Scaling vs. Vertical Scaling');
  });

  test('check_for_horizontal_scaling_definition', async ({ page }) => {
    await page.goto('https://anneryshc.github.io/is373_devops_hexo/Scaling-Strategies/');
    const content = await page.content();
    expect(content).toContain('Horizontal Scaling (Scaling Out)');
    expect(content).toContain('Increases capacity by adding more machines or nodes to your system');
  });

  test('check_for_vertical_scaling_definition', async ({ page }) => {
    await page.goto('https://anneryshc.github.io/is373_devops_hexo/Scaling-Strategies/');
    const content = await page.content();
    expect(content).toContain('Vertical Scaling (Scaling Up)');
    expect(content).toContain('Increases capacity by adding more resources (CPU, RAM, storage) to an existing machine');
  });

  test('check_for_key_differences_section', async ({ page }) => {
    await page.goto('https://anneryshc.github.io/is373_devops_hexo/Scaling-Strategies/');
    
    // Wait for the Key Differences section to load
    await page.waitForSelector('h3:has-text("Key Differences")');
  
    const content = await page.content();
  
    // Checking for a more flexible match
    expect(content).toContain('Resource Efficiency');
    expect(content).toContain('Horizontal scaling adds more machines');
    expect(content).toContain('Isolation and Redundancy');
  });
  
});
