module.exports = {
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },

  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'prettier',
    'prettier/react',
  ],

  plugins: ['prettier'],

  env: {
    browser: true,
  },

  rules: {
    'prettier/prettier': 'error',
    'no-extra-semi': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.ts', '.jsx', '.tsx'] },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/no-unescaped-entities': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'import/prefer-default-export': 'off',
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info'],
      },
    ],
    'no-use-before-define': 'off',
  },

  settings: {
    // Allow absolute paths in imports, e.g. import Button from 'components/Button'
    // https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
  },
  globals: {
    React: true,
    google: true,
    mount: true,
    mountWithRouter: true,
    shallow: true,
    shallowWithRouter: true,
    context: true,
    expect: true,
    jsdom: true,
    JSX: true,
  },
}
