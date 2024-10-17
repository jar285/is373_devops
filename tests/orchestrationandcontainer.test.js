const { test, expect } = require('@playwright/test');

test.describe('Orchestration and Container Management Page', () => {

  // Test for correct page title
  test('correct_title', async ({ page }) => {
    await page.goto('https://anneryshc.github.io/is373_devops_hexo/Orchestration-and-Container-Management/');
    await expect(page).toHaveTitle('Orchestration and Container Management | DevOps-Journey');
  });

  // Test for main sections presence
  test('check_for_main_sections', async ({ page }) => {
    await page.goto('https://anneryshc.github.io/is373_devops_hexo/Orchestration-and-Container-Management/');

    // Verify heading for "What is Orchestration?"
    const orchestrationHeading = await page.locator('h2:has-text("What is Orchestration?")');
    await expect(orchestrationHeading).toBeVisible();

    // Verify heading for "What is container orchestration used for?"
    const containerOrchestrationHeading = await page.locator('h2:has-text("What is container orchestration used for?")');
    await expect(containerOrchestrationHeading).toBeVisible();

    // Verify heading for "How container orchestration works"
    const howContainerWorksHeading = await page.locator('h2:has-text("How container orchestration works")');
    await expect(howContainerWorksHeading).toBeVisible();

    // Verify heading for "Kubernetes Overview"
    const kubernetesHeading = await page.locator('h2:has-text("Kubernetes Overview")');
    await expect(kubernetesHeading).toBeVisible();
  });

  // Test for presence of key points in content
  test('check_for_key_points', async ({ page }) => {
    await page.goto('https://anneryshc.github.io/is373_devops_hexo/Orchestration-and-Container-Management/');
    
    // Check for "Kubernetes" mention
    const kubernetesText = await page.locator('text=Kubernetes (container orchestration)');
    await expect(kubernetesText).toBeVisible();

    // Check for container orchestration tasks such as "Provisioning and deployment"
    const provisioningText = await page.locator('text=Provisioning and deployment');
    await expect(provisioningText).toBeVisible();

    // Check for mention of "self-healing"
    const selfHealingText = await page.locator('text=Self-Healing');
    await expect(selfHealingText).toBeVisible();
  });
});
