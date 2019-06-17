module.exports = {
  extends: ['plugin:react/recommended', 'prettier/react'],
  plugins: ['react'],
  env: {
    es6: true,
    browser: true,
  },
  overrides: [
    {
      files: ['**/*.jsx', '**/*.tsx'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: {
        'unicorn/filename-case': 'off',
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
  ],
}
