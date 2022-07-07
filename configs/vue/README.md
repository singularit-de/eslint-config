# @singularit/eslint-config-vue [![npm](https://img.shields.io/npm/v/@singularit/eslint-config-vue?color=a1b858&label=)](https://npmjs.com/package/@singularit/eslint-config-vue)    

## Usage

### Install

```bash
npm install eslint @singularit/eslint-config-vue -D
```

### Config .eslintrc.js

```json
{
  "extends": "@singularit/eslint-config-vue"
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

## License

MIT

## Credits

- [antfu/eslint-config](https://github.com/antfu/eslint-config) 