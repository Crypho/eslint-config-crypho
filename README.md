# Crypho eslint configuration

This package contains the standard [eslint](https://eslint.org) configuration for Crypho.

It exposes separate configurations:: one for normal usage and one for React projects.

## Normal usage

For non-React projects you only need to add `eslint-config-crypho` to your
`.eslintrc`:

```json
{
  "extends": [
    "eslint-config-crypho"
  ]
}
```

This will enable the following rules:

* The [recommended config](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/index.js) from [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
* The recommended rules fron [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise
* Using eslint-plugin-prettier to remove conflicts between prettier and eslint.
* Assume an ES6 environment
* For test files also enable the `jest` and `node` environments.

## React usage

For React using projects you can also enable a set of React-specific rules:

```json
{
  "extends": [
    "eslint-config-crypho",
    "eslint-config-crypho/react"
  ]
}
```

This enables several rules:

* For `*.jsx` files:

  * Enable JSX parsing
  * Disable the `unicorn/filename-case` rule

* Assume a `browser` environment in all files
* The recommended rules from [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
* Enable the `prettier/react` rules
