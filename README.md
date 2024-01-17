<h1>PlayWright notes</h1>

<h1>Content</h1>

- [Installation](#installation)
  - [Install TypeScript](#install-typescript)
  - [PlayWright](#playwright)
  - [ESLint](#eslint)
  - [Prettier](#prettier)
  - [ESLint + Prettier](#eslint--prettier)
  - [Lint-staged](#lint-staged)
  - [Husky](#husky)

# Installation

## Install TypeScript

[Link](https://www.typescriptlang.org/)

```
npm install typescript --save-dev
npx tsc --init
```

## PlayWright

[Link](https://playwright.dev/)

```
npm init playwright@latest
```

For **TypeScript**:

- √ Do you want to use TypeScript or JavaScript? · **TypeScript**
- √ Where to put your end-to-end tests? · **tests**
- √ Add a GitHub Actions workflow? (y/N) · **false**
- √ Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · **true**

Check that PlayWright is installed (open UI app):

```
npx playwright test --ui
```

## ESLint

[Link](https://github.com/eslint/eslint)

[VSCode Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

```
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
npx eslint --init
```

For **TypeScript**:

- √ How would you like to use ESLint? · **style**
- √ What type of modules does your project use? · **esm**
- √ Which framework does your project use? · **none**
- √ Does your project use TypeScript? · No / **Yes**
- √ Where does your code run? · **browser, node**
- √ How would you like to define a style for your project? · **guide**
- √ Which style guide do you want to follow? · **standard-with-typescript**
- √ What format do you want your config file to be in? · **JSON**
- √ Would you like to install them now? · **No** / Yes

[.eslintrc.json](.eslintrc.json):

```json
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint"],
  "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  "rules": {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/consistent-type-definitions": ["error", "type"]
  },
  "env": {
    "browser": true,
    "es2021": true
  }
}
```

Add into [`package.json`](package.json):

```json
"scripts": {
  "dev": "tsc --watch",
  "lint": "eslint --ignore-path .eslintignore --ext .js,.ts ."
},
```

Create [`.eslintignore`]:

```
node_modules
dist
```

For running ESLinter:

```
npm run lint --fix
```

## Prettier

[Link](https://github.com/prettier/prettier)

[VSCode Extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

```
npm install --save-dev prettier
```

Create [`.prettierrc`]:

```
{
  "semi": false, // Specify if you want to print semicolons at the end of statements
  "singleQuote": true, // If you want to use single quotes
  "arrowParens": "avoid", // Include parenthesis around a sole arrow function parameter
}
```

Add `format` script into [`package.json`]:

```json
"scripts": {
  "dev": "tsc --watch",
  "lint": "eslint --ignore-path .eslintignore --ext .js,.ts .",
  "format": "prettier --ignore-path .gitignore --write \"**/*.+(js|ts|json)\""
}
```

Run prettier:

```
npm run format
```

## ESLint + Prettier

```
npm install --save-dev eslint-config-prettier
```

Update [`eslintrc.json`]:

```json
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "rules": {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/consistent-type-definitions": ["error", "type"]
  },
  "env": {
    "browser": true,
    "es2021": true
  }
}
```

## Lint-staged

[Link](https://github.com/okonet/lint-staged)

```
npm install --save-dev lint-staged
```

Create [`.lintstagedrc.json`]:

```json
{
  "*.ts": ["npm run format", "npm run lint"]
}
```

## Husky

[Link](https://github.com/typicode/husky)

```
npm install husky -D
npx husky install
npx husky add .husky/pre-commit "npx lint-staged"
git add .husky/pre-commit
```
