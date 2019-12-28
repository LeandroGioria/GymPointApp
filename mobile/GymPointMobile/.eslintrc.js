module.exports = {
  env: {
    es6: true,
    jest: true,
    browser: true
  },
  extends: [
        'airbnb',
        'prettier',
        'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
    'react-hooks',
    'import-helpers',
    'jsx-a11y'
  ],
  rules: {
        "prettier/prettier": "error",
        "react/jsx-filename-extension": ['error', { extensions: ['.jsx', '.js'] }],
        "import/prefer-default-export": 'off',
        "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
        "react/jsx-one-expression-per-line": "off",
        "global-require": "off",
        "react-native/no-raw-text": "off",
        "no-param-reassign": "off",
        "no-underscore-dangle": "off",
        camelcase: "off",
        "no-console": ["error", { allow: ["tron"] }],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        'import-helpers/order-imports': [
          'warn',
          {
              newlinesBetween: 'always', // new line between groups
              groups: [
                  '/^react/',
                  '/^styled/',
                  'module',
                  '/^@shared/',
                  ['parent', 'sibling', 'index'],
              ],
              alphabetize: { order: 'asc', ignoreCase: true },
          },
      ],
  },
  settings: {
    "import/resolver": {
      "babel-plugin-root-import":{
        rootPathSuffix: "src"
      }
    }
  },
};
