const { test, expect } = require('@playwright/test');

test.describe('Software Packaging Page', () => {
  test('correct_title', async ({ page }) => {
    // Navigate to the page
    await page.goto('https://anneryshc.github.io/is373_devops_hexo/Software-Packaging/');
    
    // Check the page title
    await expect(page).toHaveTitle('Software Packaging | DevOps-Journey');
  });

  test('check_for_heading', async ({ page }) => {
    // Navigate to the page
    await page.goto('https://anneryshc.github.io/is373_devops_hexo/Software-Packaging/');

    // Check the main heading text
    const heading = await page.locator('h1[itemprop="headline name"]');
    await expect(heading).toHaveText('Software Packaging');
  });

  test('check_for_content_sections', async ({ page }) => {
    // Navigate to the page
    await page.goto('https://anneryshc.github.io/is373_devops_hexo/Software-Packaging/');

    // Check for the presence of key sections
    const sectionTitles = [
      'What is a Software Package?',
      'Tools and Technologies',
      'Key Activities in Software Packaging:',
      'Advantages of Software Packages:',
      'Disadvantages of Software Packages:'
    ];

    for (const title of sectionTitles) {
      const section = await page.locator(`text="${title}"`);
      await expect(section).toBeVisible();
    }
  });

  test('check_no_images_present', async ({ page }) => {
    // Navigate to the page
    await page.goto('https://anneryshc.github.io/is373_devops_hexo/Software-Packaging/');
  
    // Check that no images are present
    const imageCount = await page.locator('img').count();  // Await the count() Promise
    await expect(imageCount).toBe(0);  // Expect no images to be found
  });
  
});
