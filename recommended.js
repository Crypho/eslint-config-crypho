module.exports = {
  extends: [
    "plugin:unicorn/recommended",
    "plugin:promise/recommended",
    "plugin:prettier/recommended",
    "eslint:recommended",
    "prettier",
    "prettier/babel",
    "prettier/unicorn"
  ],
  plugins: ["promise", "unicorn", "prettier"],
  parserOptions: {
    ecmaVersion: "2018",
    sourceType: "module"
  },
  env: {
    es6: true
  },
  rules: {
    // This makes diffs smaller and easier to read
    "comma-dangle": "always-multiline",
    "unicorn/prevent-abbreviations": 0
  },
  overrides: [
    {
      files: ["**/*.test.js", "src/setupTests.js"],
      env: {
        jest: true,
        node: true
      }
    }
  ]
};
