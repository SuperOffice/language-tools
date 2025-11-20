// vitest.config.mjs
import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        include: ['tests/unit/vitest/**/*.test.ts'],
        exclude: [
            // VS Code integration tests - require actual VS Code API
            //'**/registerCommands.test.ts'
        ],
        environment: 'node',
        globals: true,
        setupFiles: ['./tests/unit/vitest/vitest-setup.ts'],
        coverage: {
            provider: 'v8',
            reporter: ['text', 'json', 'html'],
            include: ['src/**/*.ts'],
            exclude: [
                'tests/unit/vitest/**',
                'tests/unit/vitest/**/*.d.ts',
                'tests/unit/vitest/types/**',
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
    },
    // Add esbuild for TypeScript compilation
    esbuild: {
        target: 'node20'
    }
});
