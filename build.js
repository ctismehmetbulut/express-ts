// build.js
const fs = require('fs-extra');
const path = require('path');
const { build } = require('esbuild');
const fs = require('fs');

// Resolve the path to the dist directory
const distPath = path.resolve(__dirname, 'dist');

// Remove the dist directory
fs.removeSync(distPath);

console.log('Build directory cleaned.');

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
