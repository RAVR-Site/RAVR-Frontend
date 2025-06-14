import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import typescriptEslintParser from '@typescript-eslint/parser';

import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import perfectionist from 'eslint-plugin-perfectionist';
import react from 'eslint-plugin-react';
import unusedImports from 'eslint-plugin-unused-imports';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: ['**/*', '!src/**/*'],
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: typescriptEslintParser, // Added parser for TypeScript
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'perfectionist': perfectionist,
      'react': react,
      'unused-imports': unusedImports,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'quotes': ['error', 'single'],
      'space-in-parens': ['error', 'never'],
      'object-curly-spacing': ['error', 'always'],
      'perfectionist/sort-imports': ['error', {
        'customGroups': {
          'type': {
            'react': 'react',
            'next': 'next',
            'scss': 'scss',
          },
          'value': {
            'react': ['react', 'react-*'],
            'next': ['next', 'next/*'],
            'scss': ['.+\\.module.scss$'],
          },
        },
        'groups': ['type', 'next', 'react', 'builtin', 'external', 'internal-type', 'internal', 'side-effect', 'unknown' , 'style', 'scss'],
        'newlinesBetween': 'always',
        'order': 'asc',
        'type': 'natural',
      }],
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', next: 'return', prev: '*' },
        { blankLine: 'always', next: '*', prev: ['const', 'let', 'var'] },
        { blankLine: 'any', next: ['const', 'let', 'var'], prev: ['const', 'let', 'var'] },
      ],
      'prefer-const': 'error',
      'react/jsx-curly-brace-presence': [
        'error',
        {
          'children': 'ignore',
          'propElementValues': 'always',
          'props': 'always',
        },
      ],
      'max-lines': ['error', 300],
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        { "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }
      ]
    },
  },
];

export default eslintConfig;
