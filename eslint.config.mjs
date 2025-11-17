// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        ignores: [
            '**/scripts/**',
            '**/dist/**',
            '**/out/**',
            '**/node_modules/**',
            '**/*.js'
        ]
    },
    {
        rules: {
            // TypeScript strict rules
            '@typescript-eslint/explicit-function-return-type': 'error',
            '@typescript-eslint/no-explicit-any': 'error'
        }
    }
);
