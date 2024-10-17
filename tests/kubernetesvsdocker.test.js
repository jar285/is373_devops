// tests/kubernetesvsdocker.test.js
const { test, expect } = require('@playwright/test');

test('correct_title', async ({ page }) => {
  // Navigate to the Kubernetes vs Docker page
  await page.goto('https://anneryshc.github.io/is373_devops_hexo/Kubernetes-vs-Docker/');

  // Verify the page title contains 'Kubernetes vs Docker'
  await expect(page).toHaveTitle(/Kubernetes vs Docker/);
});

test('check_for_table_headings', async ({ page }) => {
  // Navigate to the page
  await page.goto('https://anneryshc.github.io/is373_devops_hexo/Kubernetes-vs-Docker/');

  // Verify table headings
  await expect(page.locator('text=Concept')).toBeVisible();
  await expect(page.locator('text=Docker 🐳')).toBeVisible();
  await expect(page.locator('text=Kubernetes ☸️')).toBeVisible();
});

test('check_for_concept_definitions', async ({ page }) => {
  // Navigate to the page
  await page.goto('https://anneryshc.github.io/is373_devops_hexo/Kubernetes-vs-Docker/');

  // Check for the definitions of Docker and Kubernetes
  await expect(page.locator('text=Docker is a platform and set of tools for creating, deploying, and managing containers.')).toBeVisible();
  await expect(page.locator('text=Kubernetes is an open-source orchestration platform designed to automate containerized applications')).toBeVisible();
});

test('check_for_key_differences_section', async ({ page }) => {
    // Navigate to the page
    await page.goto('https://anneryshc.github.io/is373_devops_hexo/Kubernetes-vs-Docker/');
  
    // Wait for the Key Differences section to load
    await page.waitForSelector('table tbody tr:nth-child(4) td:nth-child(2) ul li:nth-child(1)');
  
    // Verify key differences for Docker
    await expect(page.locator('table tbody tr:nth-child(4) td:nth-child(2) ul li:nth-child(1)')).toHaveText('Scope: Docker focuses on building and running containers.');
    await expect(page.locator('table tbody tr:nth-child(4) td:nth-child(2) ul li:nth-child(2)')).toHaveText('Orchestration: Basic orchestration through Docker Swarm.');
    await expect(page.locator('table tbody tr:nth-child(4) td:nth-child(2) ul li:nth-child(3)')).toHaveText('Scalability: Scaling is manual and less automated.');
    
    // Verify key differences for Kubernetes
    await expect(page.locator('table tbody tr:nth-child(4) td:nth-child(3) ul li:nth-child(1)')).toHaveText('Scope: Kubernetes manages containers at scale.');
    await expect(page.locator('table tbody tr:nth-child(4) td:nth-child(3) ul li:nth-child(2)')).toHaveText('Orchestration: Advanced orchestration capabilities.');
    await expect(page.locator('table tbody tr:nth-child(4) td:nth-child(3) ul li:nth-child(3)')).toHaveText('Scalability: Excels in automatic scaling based on traffic and resource usage.');
});


test('check_for_how_they_work_together_section', async ({ page }) => {
  // Navigate to the page
  await page.goto('https://anneryshc.github.io/is373_devops_hexo/Kubernetes-vs-Docker/');

  // Verify the "How They Work Together" section
  await expect(page.locator('text=Docker is used to create and run containers, while Kubernetes manages and orchestrates these containers')).toBeVisible();
});
