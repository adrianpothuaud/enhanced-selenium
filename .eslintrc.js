module.exports = {
  'env': {
    'es2021': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'overrides': [
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    '@typescript-eslint',
    'import',
    'jest'
  ],
  'rules': {
    camelcase: ['error', { ignoreDestructuring: true }],
    'import/newline-after-import': ['error', { count: 1 }],
    'import/order': ['error', { alphabetize: { order: 'asc' }, groups: ['builtin', 'external', 'internal'], 'newlines-between': 'always' }],
    'indent': ['error', 2],
    'key-spacing': ['error', { afterColon: true }],
    'keyword-spacing': ['error', { after: true }],
    'linebreak-style': ['error','unix'],
    'no-console': 'off',
    'no-multiple-empty-lines': 'error',
    'object-curly-spacing': ['error', 'always'],
    'one-var-declaration-per-line': 'error',
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'sort-keys': 'error',
    'sort-vars': 'error'
  }
}
