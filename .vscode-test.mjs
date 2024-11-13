import { defineConfig } from '@vscode/test-cli';

export default defineConfig({
	files: '/packages/superofficedx-vscode-core/out/test/**/*.test.js',
});