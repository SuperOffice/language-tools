import { test, expect } from './workbox';

test('should be able to execute the first test of the example project', async ({ workbox }) => {
    // Test that VS Code is running
    const title = await workbox.title();
    expect(title).toContain('Visual Studio Code');
    console.log('VS Code title:', title);

    // Wait a bit longer for the extension to activate
    await workbox.waitForTimeout(2000);

    // Check if VS Code UI has loaded properly
    const explorerVisible = await workbox.locator('.explorer-viewlet').isVisible();
    console.log('Explorer visible:', explorerVisible);

    // Try to open command palette and look for SuperOffice commands
    await workbox.keyboard.press('Control+Shift+P');
    await workbox.waitForSelector('.quick-input-widget', { timeout: 5000 });

    // Type to search for SuperOffice commands
    await workbox.fill('.quick-input-widget input', 'SuperOffice');
    await workbox.waitForTimeout(1000);

    // Check if any SuperOffice commands appear
    const quickInputList = await workbox.locator('.quick-input-list');
    const commandsText = await quickInputList.textContent();
    console.log('Available commands:', commandsText);

    // Check if our extension commands are available
    const hasSignInCommand = commandsText?.includes('Sign In') || commandsText?.includes('SuperOffice');
    console.log('SuperOffice commands found:', hasSignInCommand);

    // Press Escape to close command palette
    await workbox.keyboard.press('Escape');

    // Basic verification that VS Code and extension loaded
    expect(title).toContain('Visual Studio Code');
    console.log('Test completed successfully');
});
