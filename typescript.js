module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', 'prettier/@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-non-null-assertion': 0,
    // Typescript will almost always infer this correctly
    '@typescript-eslint/explicit-function-return-type': 0,
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
