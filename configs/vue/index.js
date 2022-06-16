module.exports = {
    overrides: [
        {
            files: ['*.vue'],
            parser: 'vue-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser',
            },
            rules: {
                'no-unused-vars': 'off',
                'no-undef': 'off',
                '@typescript-eslint/no-unused-vars': 'off',
            },
        },
    ],
    extends: [
        'plugin:vue/vue3-recommended',
        // TODO: @singularit/eslint-plugin-ts
    ],
    rules: {}
}