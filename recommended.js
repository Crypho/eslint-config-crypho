module.exports = {
  extends: [
    'plugin:unicorn/recommended',
    'plugin:promise/recommended',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'prettier',
    'prettier/babel',
    'prettier/unicorn',
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
  },
  overrides: [
    {
      files: ['src/setupTests.js', 'src/setupFilesAfterEnv.js', 'src/setupFilesAfterEnv.test.js'],
      rules: {
        'unicorn/filename-case': 'off',
      },
    },
    {
      files: ['**/*.test.js', 'src/setupTests.js', 'src/setupFilesAfterEnv.js'],
      env: {
        jest: true,
        node: true,
      },
    },
  ],
}
