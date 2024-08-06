const typescriptEslintParser = require('@typescript-eslint/parser');
const typescriptEslintPlugin = require( '@typescript-eslint/eslint-plugin');
const eslintPluginPrettier = require( 'eslint-plugin-prettier');
const eslintConfigPrettier = require( 'eslint-config-prettier');

module.exports = [
  {
    files: ['src/**/*.ts', 'test/**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...eslintConfigPrettier.rules,
      ...typescriptEslintPlugin.configs.recommended.rules,
      'prettier/prettier': 'error',
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
    ignores: ['dist', 'node_modules'],
  },
];
