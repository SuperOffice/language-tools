// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        projects: ['packages/*/vitest.config.ts'],  // Adjust the path as necessary
    },
});
