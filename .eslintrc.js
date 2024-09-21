module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser', // Use Babel for JavaScript
    ecmaVersion: 2020,
    sourceType: 'module',
    requireConfigFile: false,
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-recommended', // For Vue 3
    'eslint:recommended',
  ],
  rules: {
    // your custom rules here
  },
};
