import { test, expect } from '@playwright/test';

test('index_page_title', async ({ page }) => {
  // Navigate to the index page on GitHub Pages
  await page.goto('https://anneryshc.github.io/is373_devops_hexo/');
  
  // Check if the page title contains "DevOps-Journey"
  await expect(page).toHaveTitle(/DevOps-Journey/);
});

test('check_for_key_titles', async ({ page }) => {
  // Navigate to the index page on GitHub Pages
  await page.goto('https://anneryshc.github.io/is373_devops_hexo/');

  // Wait for the page to load
  await page.waitForLoadState('domcontentloaded');

  // Check for key titles on the page by targeting specific elements
  await expect(page.locator('a:has-text("Docker Setup Guide")')).toBeVisible();
  await expect(page.locator('a:has-text("Key Concepts")')).toBeVisible();
  await expect(page.locator('a:has-text("Containerization vs Virtualization")')).toBeVisible();
  await expect(page.locator('a:has-text("Kubernetes vs Docker")')).toBeVisible();
  await expect(page.locator('a:has-text("Scaling Strategies")')).toBeVisible();
  await expect(page.locator('a:has-text("Orchestration and Container Management")')).toBeVisible();
  await expect(page.locator('a:has-text("Twelve-Factor App")')).toBeVisible();
  await expect(page.locator('a:has-text("Software Packaging")')).toBeVisible();
  await expect(page.locator('a:has-text("History of Virtualization")')).toBeVisible();
  await expect(page.locator('a:has-text("Resources")')).toBeVisible();
  await expect(page.locator('a:has-text("Glossary")')).toBeVisible();
});
