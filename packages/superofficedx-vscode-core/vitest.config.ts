// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        include: ['src/tests/**/*.test.ts'],
        exclude: [
            // VS Code integration tests - require actual VS Code API
            '**/superofficedx-vscode-core.test.ts',
            '**/virtualFileSystemProvider.test.ts',
            '**/registerCommands.test.ts'
        ],
        environment: 'node',
        globals: true,
        alias: {
            vscode: '/home/runner/work/language-tools/language-tools/packages/superofficedx-vscode-core/src/tests/__mocks__/vscode.ts'
        },
        coverage: {
            provider: 'v8',
            reporter: ['text', 'json', 'html'],
            include: ['src/**/*.ts'],
            exclude: [
                'src/tests/**',
                'src/**/*.d.ts',
                'src/types/**',
                'dist/**'
            ],
            // Set realistic thresholds for files under test
            // We're testing httpHandler and httpService with vitest
            thresholds: {
                lines: 3,
                functions: 10,
                branches: 50,
                statements: 3
            }
        }
    }
});
