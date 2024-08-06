// build.js
const { build } = require('esbuild');

build({
  entryPoints: ['src/app.ts'],
  bundle: true,
  outfile: 'dist/app.js',
  platform: 'node',
  target: 'node20',
  external: ['express'], // add any other external dependencies here
  minify: true, // Add this for production builds
  sourcemap: true, // Add this for easier debugging
}).catch(() => process.exit(1));
