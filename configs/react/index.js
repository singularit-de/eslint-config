const { isPackageExists } = require('local-pkg')

const react = isPackageExists('react')

module.exports = react ? {
  plugins: [
    'react',
    'react-hooks',
    'react-prefer-function-component', // Credit: https://github.com/tatethurston
  ],
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    '@singularit/eslint-config-typescript',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off', // Turn off propTypes validation in TSX files
        '@typescript-eslint/comma-dangle': ['error', {
          generics: 'always', // prevent confusing generic syntax as tsx
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          functions: 'always-multiline',
        }],
      },
    },
  ],
  rules: {
    // general react rules
    'react-prefer-function-component/react-prefer-function-component': 'error', // Forbid use of class components
    'react/no-array-index-key': 'warn', // Using index as key can lead to unnecessary rerenders
    'react/no-danger': 'error', // Prevent usage of dangerouslySetInnerHTML
    'react/no-invalid-html-attribute': 'error', // Forbid attribute with invalid value
    'react/no-multi-comp': 'warn', // Enforce proper code splitting
    'react/no-namespace': 'error', // Prevent usage of the namespaces
    'react/no-unstable-nested-components': 'error', // Prevent usage of unstable nested components
    'react/no-unused-prop-types': 'error', // Prevent unused prop types
    'react/forbid-component-props': 'warn', // No custom component should use html attributes
    'react/self-closing-comp': 'error', // Prevent extra closing tags for components without children
    'react/void-dom-elements-no-children': 'error', // Prevent passing of children to void DOM elements
    // FC specific rules
    'react-hooks/exhaustive-deps': 'warn', // Validate the list of dependencies used by hooks
    'react-hooks/rules-of-hooks': 'error', // Enforces rules of Hooks (see https://reactjs.org/docs/hooks-rules.html)
    'react/hook-use-state': 'error', // Ensure symmetric naming of useState hook value and setter
    'react/function-component-definition': [ // Enforce arrow function components
      'error',
      {
        namedComponents: ['arrow-function'],
        unnamedComponents: ['arrow-function'],
      },
    ],
    // CC specific rules
    'react/no-access-state-in-setstate': 'warn', // Prevent access to this.state in setState
    'react/no-arrow-function-lifecycle': 'error', // Prevent arrow functions in component lifecycle methods
    'react/no-did-mount-set-state': 'error', // Prevent usage of setState in componentDidMount
    'react/no-did-update-set-state': 'error', // Prevent usage of setState in componentDidUpdate
    'react/no-will-update-set-state': 'error', // Prevent usage of setState in componentWillUpdate
    'react/no-redundant-should-component-update': 'error', // Prevent usage of shouldComponentUpdate when extending React.PureComponent
    'react/no-unsafe': 'error', // Prevent usage of unsafe lifecycle methods
    'react/no-unused-class-component-methods': 'error', // Prevent unused methods in CC
    'react/no-unused-state': 'error', // Prevent unused state variables
    'react/prefer-es6-class': ['error', 'always'], // Prefer ES6 class over React.createClass
    'react/sort-comp': 'error', // Enforce sorted methods in class components
    // JSX specific rules
    'jsx-quotes': ['error', 'prefer-double'],
    'react/jsx-boolean-value': 'error', // Enforce boolean attributes notation in JSX
    'react/jsx-closing-bracket-location': 'error', // Validate closing bracket location in JSX
    'react/jsx-closing-tag-location': 'error', // Validate closing tag location for multiline JSX
    'react/jsx-first-prop-new-line': ['error', 'multiline'], // Ensure proper position of the first property in JSX
    'react/jsx-fragments': 'error', // Enforce fragment shorthand syntax
    'react/jsx-indent': ['error', 2], // Enforce consistent 2-space indentation in JSX
    'react/jsx-indent-props': ['error', 2], // Enforce consistent 2-space indentation for props in JSX
    'react/jsx-max-props-per-line': [ // Enforce a maximum of three props per line in JSX
      'error',
      {
        maximum: 3,
      },
    ],
    'react/jsx-no-constructed-context-values': 'error', // Prevents JSX context provider values from taking values that will cause needless rerenders
    'react/jsx-no-leaked-render': [ // Prevent problematic leaked values from being rendered
      'error',
      {
        validStrategies: [
          'coerce',
          'ternary',
        ],
      },
    ],
    'react/jsx-no-useless-fragment': 'error', // Prevent unnecessary JSX fragments
    'react/jsx-pascal-case': 'error', // Enforce PascalCase for custom JSX components
    'react/jsx-props-no-multi-spaces': 'error', // Prevent multiple spaces between JSX props
    'react/jsx-tag-spacing': [ // Enforce consistent spacing between tags and their attributes
      'error',
      {
        beforeClosing: 'never',
        beforeSelfClosing: 'always',
      },
    ],
    'react/jsx-wrap-multilines': [ // Enforce consistent wrap of multiline JSX
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
      },
    ],
  },
} : {}

