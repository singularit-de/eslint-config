module.exports = {
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    reportUnusedDisableDirectives: true,
    extends: [
        './standard',
        'plugin:import/recommended',
        'plugin:eslint-comments/recommended',
        'plugin:jsonc/recommended-with-jsonc',
        'plugin:yml/standard',
        'plugin:markdown/recommended',
    ],
    ignorePatterns: [
        '*.min.*',
        'CHANGELOG.md',
        'dist',
        'LICENSE*',
        'output',
        'coverage',
        'public',
        'temp',
        'packages-lock.json',
        'pnpm-lock.yaml',
        'yarn.lock',
        '__snapshots__',
        '!.github',
        '!.vitepress',
        '!.vscode',
    ],
    plugins: [
        'html',
        'unicorn',
    ],
    settings: {
        'import/resolver': {
            node: { extensions: ['.js', '.mjs'] },
        },
    },
    overrides: [],
    rules: {},
}