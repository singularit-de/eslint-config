const {isPackageExists} = require("local-pkg");
const vue = isPackageExists('vue')

module.exports = vue ? {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  ],
  extends: [
    'plugin:vue/vue3-recommended',
    '@singularit/eslint-config-typescript',
  ],
  rules: {},
} : {}
