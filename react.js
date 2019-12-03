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
      files: ['**/*.test.jsx', '**/*.test.tsx'],
      env: {
        jest: true,
        node: true,
      },
    },
    {
      files: ['**/*.jsx', '**/*.tsx'],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
  ],
}
