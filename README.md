# Template Repository

### Installation

This template repository is the result of running the following commands:

- `npm init -y`
- `npm install --save-dev eslint`
- `./node_modules/.bin/eslint --init`
- `npm install --save-dev --save-exact prettier`
  - Then, create a `.prettierignore` file to let CLI & editors know which files to **not** format.
  - Refer to [Prettier docs](https://prettier.io/docs/en/install) for `.prettierignore` and other examples.
- `npm install --save-dev eslint-config-prettier`
  - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier#installation)
  - package turns off ESLint rules that are unnecessary or may conflict with Prettier.
  - Note: make sure to put `"prettier"` last so it can override other configs. See above docs for example.
- `npm install -D babel-loader @babel/core @babel/preset-env webpack`

```module: {
  rules: [
    {
      test: /\.(?:js|mjs|cjs)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', { targets: "defaults" }]
          ]
        }
      }
    }
  ]
}
```

```
// .vscode/settings.json
{
  "editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
},
  "eslint.validate": ["javascript"]
}

```

### Tools

- ESLint
- [Prettier](https://prettier.io/)

```

```
