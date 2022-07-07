# @singularit/eslint-config

## Configs

| Config                                                                   | Version                                                                                                                                                         | Description                                                                      |
|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| [`@singularit/eslint-config`](./configs/all/README.md)                   | [![npm](https://img.shields.io/npm/v/@singularit/eslint-config?color=a1b858&label=)](https://npmjs.com/package/@singularit/eslint-config)                       | extends [`@singularit/eslint-config-vue`](./configs/vue/README.md)               |
| [`@singularit/eslint-config-basic`](./configs/basic/README.md)           | [![npm](https://img.shields.io/npm/v/@singularit/eslint-config-basic?color=a1b858&label=)](https://npmjs.com/package/@singularit/eslint-config-basic)           |                                                                                  |
| [`@singularit/eslint-config-typescript`](./configs/typescript/README.md) | [![npm](https://img.shields.io/npm/v/@singularit/eslint-config-typescript?color=a1b858&label=)](https://npmjs.com/package/@singularit/eslint-config-typescript) | extends [`@singularit/eslint-config-basic`](./configs/basic/README.md)           |
| [`@singularit/eslint-config-vue`](./configs/vue/README.md)               | [![npm](https://img.shields.io/npm/v/@singularit/eslint-config-vue?color=a1b858&label=)](https://npmjs.com/package/@singularit/eslint-config-vue)               | extends [`@singularit/eslint-config-typescript`](./configs/typescript/README.md) |

## Usage

### Install

```bash
npm install eslint @singularit/eslint-config -D
```

### Config .eslintrc.js

```javascript
module.exports = {
  extends: "@singularit"
}
```

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### Githooks with `husky` and `lint-staged`

1. Install and setup husky

```bash
npx husky-init && npm install
```

2. Add `lint-staged` to pre-commit hook

```diff
# .husky/pre-commit

#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

- npm test
+ npx lint-staged
```

3. Configure `lint-staged`

```diff
// package.json
{
  ...
+ "lint-staged": {
+   "*.{js,jsx,ts,tsx,vue,md,yml,yaml}": "eslint --fix --max-warnings 0"
+ }
  ...
}
```

### Automatic fix-on-save in vscode

1. Install the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

2. Add file .vscode/settings.json or add to file if it already exists
```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## License

MIT

## Credits

- [antfu/eslint-config](https://github.com/antfu/eslint-config) 
