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
            '@typescript-eslint/no-explicit-any': 'error',

            // Enforce barrel imports (imports from index.ts files)
            'no-restricted-imports': [
                'error',
                {
                    patterns: [
                        {
                            group: ['**/services/*', '!**/services/index', '!**/services'],
                            message: 'Import from services barrel (../../services) instead of direct service files'
                        },
                        {
                            group: ['**/providers/*', '!**/providers/index', '!**/providers'],
                            message: 'Import from providers barrel (../../providers) instead of direct provider files'
                        },
                        {
                            group: ['**/types/*', '!**/types/index', '!**/types'],
                            message: 'Import from types barrel (../../types) instead of direct type files'
                        },
                        {
                            group: ['**/commands/*', '!**/commands/index', '!**/commands'],
                            message: 'Import from commands barrel (../../commands) instead of direct command files'
                        },
                        {
                            group: ['**/container/*', '!**/container/index', '!**/container'],
                            message: 'Import from container barrel (../../container) instead of direct container files'
                        },
                        {
                            group: ['**/handlers/*', '!**/handlers/index', '!**/handlers'],
                            message: 'Import from handlers barrel (../../handlers) instead of direct handler files'
                        }
                    ]
                }
            ]
        }
    }
);
