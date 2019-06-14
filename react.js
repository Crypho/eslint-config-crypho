module.exports = {
  "extends": [
    "plugin:react/recommended",
    "prettier/react",
  ],
  "plugins": [
    "react"
  ],
  "env": {
    "es6": true,
    "browser": true
  },
  "overrides": [
    {
      "files": ["**/*.jsx"],
      "parserOptions": {
        "ecmaFeatures": {
          "jsx": true
        }
      },
      "rules": {
        "unicorn/filename-case": "off",
      },
    }
  ]
}
