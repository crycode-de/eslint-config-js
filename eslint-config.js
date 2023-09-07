/**
 * ESLint configuration to be used with plain JavaScript according to my
 * personal preferences.
 */

module.exports = {

  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
  ],

  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'script',
  },

  plugins: [],

  ignorePatterns: [
    '/build/*',
    '/dist/*',
  ],

  rules: {

    'array-bracket-spacing': ['warn', 'always'],

    'array-callback-return': 'warn',

    'arrow-parens': ['warn', 'always'],

    'arrow-spacing': 'warn',

    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],

    'comma-dangle': [
      'warn',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],

    'comma-spacing': 'error',

    'default-param-last': 'error',

    'dot-location': ['warn', 'property'],

    'eol-last': 'warn',

    'eqeqeq': 'warn',

    'indent': [
      'error',
      2,
      {
        SwitchCase: 1,
        MemberExpression: 'off',
      },
    ],

    'jsx-quotes': ['error', 'prefer-single'],

    'keyword-spacing': 'error',

    'linebreak-style': ['warn', 'unix'],

    'lines-between-class-members': 'warn',

    'camelcase': 'error',

    'no-caller': 'error',

    'no-console': 'error',

    'no-duplicate-imports': 'off',
    'import/no-duplicates': [
      'error',
      {
        considerQueryString: true,
      },
    ],

    'no-eval': 'error',

    'no-implied-eval': 'error',

    'no-invalid-this': 'error',

    'no-label-var': 'warn',

    'no-loop-func': 'error',

    'no-loss-of-precision': 'error',

    'no-mixed-operators': 'warn',

    'no-redeclare': 'error',

    'no-shadow': 'error',

    'no-trailing-spaces': 'warn',

    'no-undef-init': 'warn',

    'no-unused-expressions': 'warn',

    'no-var': 'error',

    'object-curly-spacing': ['warn', 'always'],

    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],

    'quote-props': ['warn', 'as-needed'],

    'quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],

    'radix': 'warn',

    'no-return-await': 'warn',

    'semi': [
      'warn',
      'always',
      {
        omitLastInOneLineBlock: false,
      },
    ],

    'semi-style': 'warn',

    'sort-imports': [
      'warn',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],

    'space-before-blocks': 'warn',

    'space-before-function-paren': 'warn',

    'space-infix-ops': [
      'error',
      {
        int32Hint: false,
      },
    ],

    'spaced-comment': [
      'warn',
      'always',
      {
        exceptions: ['-', '+', '*'],
        line: {
          markers: ['/'],
        },
        block: {
          balanced: true,
        },
      },
    ],

    'yoda': 'warn',
  },

};
