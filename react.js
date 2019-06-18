module.exports = {
  extends: ['plugin:react/recommended', 'prettier/react'],
  plugins: ['react', 'babel'],
  env: {
    es6: true,
    browser: true,
  },
  globals: {
    require: false,
    process: false,
    global: false,
  },
  parser: 'babel-eslint',
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
