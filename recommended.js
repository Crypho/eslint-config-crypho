module.exports = {
  extends: [
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'prettier',
  ],
  plugins: ['promise', 'unicorn', 'prettier'],
  parserOptions: {
    ecmaVersion: '2018',
    sourceType: 'module',
  },
  env: {
    es6: true,
  },
  rules: {
    // This makes diffs smaller and easier to read
    'comma-dangle': ['error', 'always-multiline'],
    'unicorn/prevent-abbreviations': 0,
    'unicorn/filename-case': 'off',
    'unicorn/no-null': 'off',
  },
  overrides: [
    {
      files: ['**/*.test.js', '**/*.test.ts', 'src/setupTests.js', 'src/setupFilesAfterEnv.js'],
      env: {
        jest: true,
        node: true,
      },
    },
  ],
}
