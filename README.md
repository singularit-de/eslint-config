# @singularit/eslint-config

## Configs

| Config                                     | Version                                                                                                                                                         | Description                                 |
|--------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------|
| [`@singularit/eslint-config`]()            | [![npm](https://img.shields.io/npm/v/@singularit/eslint-config?color=a1b858&label=)](https://npmjs.com/package/@singularit/eslint-config)                       | extends @singularit/eslint-config-vue       |
| [`@singularit/eslint-config-basic`]()      | [![npm](https://img.shields.io/npm/v/@singularit/eslint-config-basic?color=a1b858&label=)](https://npmjs.com/package/@singularit/eslint-config-basic)           | TODO                              |
| [`@singularit/eslint-config-typescript`]() | [![npm](https://img.shields.io/npm/v/@singularit/eslint-config-typescript?color=a1b858&label=)](https://npmjs.com/package/@singularit/eslint-config-typescript) | extends @singularit/eslint-config-basic     |
| [`@singularit/eslint-config-vue`]()        | [![npm](https://img.shields.io/npm/v/@singularit/eslint-config-vue?color=a1b858&label=)](https://npmjs.com/package/@singularit/eslint-config-vue)               | extends @singularit/eslint-config-typescript |

## Usage

### Install

```shell
npm install @singularit/eslint-config -D
```

### Config .eslintrc

```json
{
  "extends": "@singularit" // or e.g. @singularit/eslint-config-vue
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

## License
MIT

## Credits

- [antfu/eslint-config](https://github.com/antfu/eslint-config) 