// build.js
const { build } = require('esbuild');
const { execSync } = require('child_process');
const fs = require('fs');

execSync('rimraf dist/*');

build({
  entryPoints: ['src/app.ts'],
  bundle: true,
  outfile: 'dist/app.js',
  platform: 'node',
  target: 'node20',
  external: ['express'], // add any other external dependencies here
  minify: true, // Add this for production builds
  sourcemap: true, // Add this for easier debugging
}).then(() => {
  // Optionally clean up all other files in the dist directory except app.js and its sourcemap
  fs.readdirSync('dist').forEach(file => {
    if (!file.startsWith('app.js')) {
      fs.unlinkSync(`dist/${file}`);
    }
  });
}).catch(() => process.exit(1));
