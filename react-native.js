module.exports = {
  extends: ['plugin:react/recommended', 'prettier/react', 'plugin:react-native/all'],
  plugins: ['react', 'react-native', 'babel'],
  env: {
    es6: true,
    'react-native/react-native': true,
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
