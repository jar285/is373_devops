import { test, expect } from '@playwright/test';

test('correct_title', async ({ page }) => {
    // Navigate to the Containerization vs Virtualization page
    await page.goto('https://anneryshc.github.io/is373_devops_hexo/Containerization-vs-Virtualization/');
    
    // Verify the page title contains 'Containerization vs Virtualization'
    await expect(page).toHaveTitle(/Containerization vs Virtualization/);
});

test('check_for_table_headings', async ({ page }) => {
    // Navigate to the Containerization vs Virtualization page
    await page.goto('https://anneryshc.github.io/is373_devops_hexo/Containerization-vs-Virtualization/');
    
    // Wait for the content to load
    await page.waitForLoadState('domcontentloaded');

    // Check for key table headings
    await expect(page.locator('text=Containerization 🐳')).toBeVisible();
    await expect(page.locator('text=Virtualization 💻')).toBeVisible();
});

test('check_for_concept_definitions', async ({ page }) => {
    // Navigate to the Containerization vs Virtualization page
    await page.goto('https://anneryshc.github.io/is373_devops_hexo/Containerization-vs-Virtualization/');
    
    // Wait for the content to load
    await page.waitForLoadState('domcontentloaded');

    // Verify the concept definitions
    const content = await page.content();
    expect(content).toContain(
      'A lightweight method of running isolated applications in the same operating system using containers.'
    );
    expect(content).toContain(
      'A technology that allows you to run multiple virtual machines (VMs) on a single physical server, each with its own OS.'
    );
});

test('check_for_how_it_works_section', async ({ page }) => {
    // Navigate to the Containerization vs Virtualization page
    await page.goto('https://anneryshc.github.io/is373_devops_hexo/Containerization-vs-Virtualization/');
    
    // Wait for the content to load
    await page.waitForLoadState('domcontentloaded');

    // Verify the "How it Works" section for both containerization and virtualization
    const content = await page.content();
    expect(content).toContain(
      'Containers package the application and its dependencies together but share the host system’s OS kernel, making them lightweight and efficient.'
    );
    expect(content).toContain(
      'Virtualization uses a hypervisor to create and manage VMs, each running a complete, isolated operating system with dedicated resources.'
    );
});

test('check_for_advantages_section', async ({ page }) => {
    // Navigate to the Containerization vs Virtualization page
    await page.goto('https://anneryshc.github.io/is373_devops_hexo/Containerization-vs-Virtualization/');
    
    // Wait for the content to load
    await page.waitForLoadState('domcontentloaded');

    // Verify the "Advantages" section for both containerization and virtualization
    const content = await page.content();
    expect(content).toContain(
      'Faster startup ⏱️'
    );
    expect(content).toContain(
      'Less resource usage 💡'
    );
    expect(content).toContain(
      'Greater isolation 🛡️'
    );
    expect(content).toContain(
      'Can run different OS types 🖥️ on the same hardware'
    );
});

test('check_for_key_differences_section', async ({ page }) => {
    // Navigate to the Containerization vs Virtualization page
    await page.goto('https://anneryshc.github.io/is373_devops_hexo/Containerization-vs-Virtualization/');
    
    // Wait for the content to load
    await page.waitForLoadState('domcontentloaded');

    // Use more specific locators and search within the section you're testing
    const containerizationKeyDifferences = page.locator('text=Resource Efficiency: Containers are more efficient and faster since they share the host OS.');
    const virtualizationKeyDifferences = page.locator('text=Resource Efficiency: Requires more resources due to having their own OS.');

    // Check for the presence of key differences content
    await expect(containerizationKeyDifferences).toBeVisible();
    await expect(virtualizationKeyDifferences).toBeVisible();
});

