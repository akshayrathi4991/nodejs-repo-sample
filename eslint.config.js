// eslint.config.js
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
  {
    files: ['**/*.js'],
    ignores: ['node_modules/**'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        console: 'readonly',
        require: 'readonly',
        module: 'readonly',
        process: 'readonly'
      }
    },
    plugins: {
      prettier: eslintPluginPrettier
    },
    rules: {
      'prettier/prettier': 'error',
      'no-unused-vars': 'warn',
      'no-console': 'off'
    }
  }
];
