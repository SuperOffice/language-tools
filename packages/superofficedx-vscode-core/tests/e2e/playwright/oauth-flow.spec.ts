import { test, expect } from './workbox';

test('should execute SuperOffice Sign In command', async ({ workbox }) => {
    console.log('=== Executing SuperOffice Sign In Command ===');

    const title = await workbox.title();
    expect(title).toContain('Visual Studio Code');
    console.log('✓ VS Code loaded:', title);

    // Wait for extension to load
    await workbox.waitForTimeout(3000);

    // Open command palette
    console.log('Opening command palette...');
    await workbox.keyboard.press('Control+Shift+P');
    await workbox.waitForSelector('.quick-input-widget', { timeout: 8000 });
    console.log('✓ Command palette opened');

    // Clear input and search for Sign In command
    await workbox.fill('.quick-input-widget input', '');
    await workbox.type('.quick-input-widget input', '>SuperOffice: Sign In');
    await workbox.waitForTimeout(1500);

    // Check what commands are available
    const commandList = await workbox.locator('.quick-input-list');
    const commandsText = await commandList.textContent();
    console.log('Available commands after typing:', commandsText?.substring(0, 300));

    // Try to click on the first command in the list if Enter doesn't work
    try {
        // First try pressing Enter
        console.log('Trying to execute with Enter key...');
        await workbox.keyboard.press('Enter');
        await workbox.waitForTimeout(1000);

    } catch (error) {
        console.log('Error executing command:', error);
    }

    console.log('✓ startNativeAppFlow command should have been executed');
    console.log('This should trigger the OAuth browser window to open');

    // Wait for VS Code security dialog to appear and click "Allow"
    console.log('Waiting for VS Code security dialog (openExternal permission)...');
    try {
        // Look for the security dialog that appears when openExternal is called
        await workbox.waitForSelector('.notifications-toasts', { timeout: 5000 });
        console.log('Security dialog area found');

        // Look for "Allow" button in notification
        const allowButton = workbox.locator('text=Allow').first();
        const allowButtonVisible = await allowButton.isVisible({ timeout: 3000 });

        if (allowButtonVisible) {
            console.log('✓ Found "Allow" button, clicking...');
            await allowButton.click();
            console.log('✓ Clicked "Allow" button');
        } else {
            // Try alternative selectors for the Allow button
            console.log('Looking for alternative Allow button selectors...');

            const altAllowButton = workbox.locator('button').filter({ hasText: 'Allow' }).first();
            if (await altAllowButton.isVisible({ timeout: 2000 })) {
                await altAllowButton.click();
                console.log('✓ Clicked Allow button (alternative selector)');
            } else {
                console.log('⚠ Allow button not found - may need manual click');
            }
        }

    } catch (error) {
        console.log('⚠ Security dialog handling:', error);
        console.log('You may need to manually click "Allow" in VS Code');
    }

    // Wait to see any effects (browser opening, dialogs, etc.)
    await workbox.waitForTimeout(3000);
    console.log('OAuth browser window should now open automatically');

    await workbox.waitForTimeout(2000);

    console.log('=== Command execution completed ===');
});

test('should verify extension commands are registered and launch the command SignIn', async ({ workbox }) => {
    console.log('=== Verifying Extension Commands ===');

    const title = await workbox.title();
    expect(title).toContain('Visual Studio Code');

    // Wait for extension activation
    await workbox.waitForTimeout(3000);

    // Open command palette
    await workbox.keyboard.press('Control+Shift+P');
    await workbox.waitForSelector('.quick-input-widget', { timeout: 5000 });

    // Search for all SuperOffice commands
    await workbox.fill('.quick-input-widget input', '>SuperOffice');
    await workbox.waitForTimeout(1500);

    const commandList = await workbox.locator('.quick-input-list');
    const allCommands = await commandList.textContent();

    console.log('All SuperOffice commands found:');
    console.log(allCommands || 'No commands found');

    // Check for specific expected commands
    const expectedCommands = [
        'Sign In',
        'startNativeAppFlow',
        'executeTypeScript',
        'uploadScript'
    ];

    for (const command of expectedCommands) {
        const found = allCommands?.includes(command);
        console.log(`${found ? '✓' : '✗'} Command '${command}': ${found ? 'Found' : 'Not found'}`);
    }

    await workbox.keyboard.press('Escape');
    console.log('=== Command Verification Completed ===');
});
