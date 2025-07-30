import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default defineConfig([

  {
    ignores: [
      'docs/**',
      'dist/**',
      'xliff/**',
      'src/generated/**',
      'node_modules/**',
    ],
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: globals.browser,
      sourceType: 'module',
    },
  },
  {
    rules: {
      'no-undef': 'off',
      'no-unused-vars': 'off',
      'prefer-const': ['error', { ignoreReadBeforeAssign: true }],
      'indent': ['error', 2],
      'semi': ['error', 'always'],
    },
  },
  eslintConfigPrettier,
]);
