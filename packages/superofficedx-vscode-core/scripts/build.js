require('esbuild').context({
    entryPoints: {
        extension: './src/extension.ts'
    },
    sourcemap: true,
    bundle: true,
    metafile: process.argv.includes('--metafile'),
    outdir: './dist',
    external: ['vscode'],
    format: 'cjs',
    platform: 'node',
    tsconfig: './tsconfig.json',
    define: { 'process.env.NODE_ENV': '"production"' },
    minify: process.argv.includes('--minify'),
    plugins: [
        {
            name: 'umd2esm',
            setup(build) {
                build.onResolve({ filter: /^(vscode-.*-languageservice|jsonc-parser)/ }, args => {
                    const pathUmdMay = require.resolve(args.path, { paths: [args.resolveDir] });
                    // Call twice the replace is to solve the problem of the path in Windows
                    const pathEsm = pathUmdMay.replace('/umd/', '/esm/').replace('\\umd\\', '\\esm\\');
                    return { path: pathEsm };
                });
            },
        },
    ],
}).then(async ctx => {
    console.log('building...');
    if (process.argv.includes('--watch')) {
        await ctx.watch();
        console.log('watching...');
    } else {
        await ctx.rebuild();

        // Copy resources folder to dist
        const fs = require('fs');
        const path = require('path');

        const srcResourcesDir = path.join(__dirname, '..', 'resources');
        const distResourcesDir = path.join(__dirname, '..', 'dist', 'resources');

        if (fs.existsSync(srcResourcesDir)) {
            // Create dist/resources directory if it doesn't exist
            if (!fs.existsSync(distResourcesDir)) {
                fs.mkdirSync(distResourcesDir, { recursive: true });
            }

            // Copy all files from resources to dist/resources
            const files = fs.readdirSync(srcResourcesDir);
            files.forEach(file => {
                const srcFile = path.join(srcResourcesDir, file);
                const distFile = path.join(distResourcesDir, file);
                fs.copyFileSync(srcFile, distFile);
            });

            console.log('Copied resources folder to dist');
        }

        await ctx.dispose();
        console.log('finished.');
    }
});
