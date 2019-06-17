module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: '2018',
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/no-non-null-assertion': false,
    // Typescript will almost always infer this correctly
    '@typescript-eslint/explicit-function-return-type': false,
  },
  overrides: [
    {
      files: ['**/*.test.js', '**/*.test.ts', 'src/setupTests.js', 'src/setupTests.ts'],
      env: {
        jest: true,
        node: true,
      },
    },
  ],
}
