const basic = require('@singularit/eslint-config-basic')

module.exports = {
    extends: [
        '@singularit/eslint-config-basic',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
    ],
    settings: {
        'import/resolver': {
            node: { extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'] },
        },
    },
    overrides: basic.overrides,
    rules: {}
}