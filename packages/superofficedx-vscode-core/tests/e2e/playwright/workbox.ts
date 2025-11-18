/**
 * Copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { test as base, type Page, _electron } from '@playwright/test';
import { downloadAndUnzipVSCode } from '@vscode/test-electron/out/download';
export { expect } from '@playwright/test';
import path from 'path';

export type TestOptions = {
    vscodeVersion: string;
};

type TestFixtures = TestOptions & {
    workbox: Page;
};

export const test = base.extend<TestFixtures>({
    vscodeVersion: ['insiders', { option: true }],
    workbox: async ({ vscodeVersion }, use) => {
        const vscodePath = await downloadAndUnzipVSCode(vscodeVersion);
        const extensionPath = path.join(__dirname, '..', '..', '..');
        const testWorkspacePath = path.join(__dirname, '..', '..', '..', '..', '..', 'test');

        console.log('Launching VS Code with extension:', extensionPath);
        console.log('Test workspace:', testWorkspacePath);

        const electronApp = await _electron.launch({
            executablePath: vscodePath,
            args: [
                '--no-sandbox',
                '--disable-gpu-sandbox',
                '--disable-updates',
                '--skip-welcome',
                '--skip-release-notes',
                '--disable-workspace-trust',
                '--disable-extensions',
                '--disable-extension-recommendations',
                '--enable-proposed-api',
                `--extensionDevelopmentPath=${extensionPath}`,
                '--new-window',
                testWorkspacePath, // Open the test workspace
            ],
            timeout: 60000, // 60 second timeout for launch
        });

        const workbox = await electronApp.firstWindow();

        // Wait for VS Code to fully load
        try {
            await workbox.waitForLoadState('domcontentloaded', { timeout: 30000 });
            await workbox.waitForTimeout(5000); // Give extension time to activate
            console.log('VS Code launched successfully');
        } catch (error) {
            console.error('Failed to load VS Code:', error);
            await electronApp.close();
            throw error;
        }

        await use(workbox);
        await electronApp.close();
    }
});
