const { test, expect } = require('@playwright/test');

test.describe('History of Virtualization Page', () => {
  
  test('correct_title', async ({ page }) => {
    // Go to History of Virtualization page
    await page.goto('https://anneryshc.github.io/is373_devops_hexo/History-of-Virtualization/');
    
    // Check page title
    await expect(page).toHaveTitle('History of Virtualization | DevOps-Journey');
  });

  test('check_for_heading', async ({ page }) => {
    // Go to History of Virtualization page
    await page.goto('https://anneryshc.github.io/is373_devops_hexo/History-of-Virtualization/');
    
    // Check the specific heading
    const mainHeading = await page.locator('h1.p-name.article-title');  // Targeting the specific class
    await expect(mainHeading).toHaveText('History of Virtualization');
  });

  test('check_for_content_sections', async ({ page }) => {
    // Go to History of Virtualization page
    await page.goto('https://anneryshc.github.io/is373_devops_hexo/History-of-Virtualization/');
    
    // Check for key content sections
    const section1 = await page.locator('h2:has-text("Early Beginnings")');
    await expect(section1).toBeVisible();
    
    const section2 = await page.locator('h2:has-text("The Rise of Personal Computing")');
    await expect(section2).toBeVisible();

    const section3 = await page.locator('h2:has-text("Virtualization Goes Mainstream")');
    await expect(section3).toBeVisible();

    const section4 = await page.locator('h2:has-text("Cloud Computing and Beyond")');
    await expect(section4).toBeVisible();
  });

  test('check_no_images_present', async ({ page }) => {
    // Go to History of Virtualization page
    await page.goto('https://anneryshc.github.io/is373_devops_hexo/History-of-Virtualization/');
    
    // Check that no images are present
    const images = await page.locator('img');
    const imageCount = await images.count();
    await expect(imageCount).toBe(0);  // Expect no images to be found
  });
});
