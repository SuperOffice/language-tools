// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        projects: [
            'packages/language-server/vitest.config.ts',
            'packages/superofficedx-vscode-core/vitest.config.ts'
        ],
    },
});
