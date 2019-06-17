module.exports = {
  extends: ["plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "2018",
    sourceType: "module"
  },
  overrides: [
    {
      files: [
        "**/*.test.js",
        "**/*.test.ts",
        "src/setupTests.js",
        "src/setupTests.ts"
      ],
      env: {
        jest: true,
        node: true
      }
    }
  ]
};
