import { test, expect } from '@playwright/test';

test.describe('Glossary Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://anneryshc.github.io/is373_devops_hexo/Glossary/');
  });

  test('should have the correct title', async ({ page }) => {
    await expect(page).toHaveTitle('Glossary | DevOps-Journey');
  });

  test('should display key glossary terms', async ({ page }) => {
    const terms = [
      { id: '#Containerization', text: 'Containerization' },
      { id: '#Docker', text: 'Docker' },
      { id: '#Kubernetes-vs-Docker', text: 'Kubernetes vs. Docker' },
      { id: '#Key-Concepts', text: 'Key Concepts' },
      { id: '#Orchestration-and-Container-Management', text: 'Orchestration and Container Management' },
      { id: '#Scaling', text: 'Scaling' },
      { id: '#Software-Packaging', text: 'Software Packaging' },
      { id: '#Twelve-Factor-App', text: 'Twelve-Factor App' },
      { id: '#Virtualization', text: 'Virtualization' },
      { id: '#Virtualization-Technology-History', text: 'Virtualization Technology (History)' }
    ];

    for (const term of terms) {
      await expect(page.locator(`h2${term.id}`)).toBeVisible();
    }
  });

  test('should have working links for key concepts', async ({ page }) => {
    const links = [
      'Containerization',
      'Docker',
      'Kubernetes',
      'Kernel',
      'Thread/Threading',
      'Orchestration',
      'Scaling',
      'Software Packaging',
      'Twelve-Factor-App',
      'Virtualization'
    ];

    for (const linkText of links) {
      const link = page.locator(`a:has-text("${linkText}")`).first();
      await expect(link).toBeVisible({ timeout: 10000 });
      await expect(link).toHaveAttribute('href', /https:\/\/anneryshc\.github\.io/);
    }
  });
});
