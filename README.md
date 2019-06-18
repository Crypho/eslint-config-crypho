# Crypho eslint configuration

This package contains the standard [eslint](https://eslint.org) configuration for Crypho.

It exposes separate configurations:: one for normal usage and one for React projects.

## JavaScript

For Javascript projects you only need to add `@crypho` to your
`.eslintrc`:

```json
{
  "extends": [
    "crypho"
  ]
}
```

This will enable the following rules:

* The [recommended config](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/index.js) from [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
* The recommended rules fron [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise
* Using eslint-plugin-prettier to remove conflicts between prettier and eslint.
* Assume an ES6 environment
* For test files also enable the `jest` and `node` environments.

## TypeScript

If you use Typescript you will also need to install some extra packages:

```shell
npm install @typescript-eslint/eslint-plugin @typescript-eslint/parser --save-dev
```

or, if you use yarn:

```shell
yarn add @typescript-eslint/eslint-plugin @typescript-eslint/parser --only=dev
```

You must also add `crypho/typescript` to your `.eslintrc` configuration file:

```json
{
  "extends": [
    "crypho",
    "crypho/typescript"
  ]
}
```

## React

For React using projects you can also enable a set of React-specific rules:

```json
{
  "extends": [
    "crypho",
    "crypho/react",
  ]
}
```

This enables several rules:

* Use Babel to parse files
* For `*.jsx` and `*.tsx` files:

  * Enable JSX parsing
  * Disable the `unicorn/filename-case` rule

* Assume a `browser` environment in all files
* The recommended rules from [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
* Enable the `prettier/react` rules


## Command-line tools

For packages containing *only* command-line tools you can use the `crypho/cli` ruleset:

```json
{
  "extends": [
    "crypho",
    "crypho/cli",
  ]
}
```

This will:

* assume the `node` environment
* allow console statements
