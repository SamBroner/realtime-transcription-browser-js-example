import esbuild, { build, serve } from 'esbuild';

esbuild.build({
    entryPoints: [
        './src/index.ts',
    ],
    bundle: true,
    outdir: './dist',
    sourcemap: true,
    watch: true,
    plugins: [
        {
            name: 'Logger',
            setup(build) {
                build.onEnd(() => {
                    console.log('Build complete');
                });
            }
        }
    ],
})
