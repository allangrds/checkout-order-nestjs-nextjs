module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true,
    "jest": true
  },
  "extends": [
    "next/core-web-vitals",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "plugins": ["@typescript-eslint", "sort-destructure-keys"],
  "overrides": [],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "project": "./tsconfig.json",
    "sourceType": "module",
    tsconfigRootDir: __dirname,
  },
  "rules": {
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-explicit-any": 1,
    "@typescript-eslint/no-unused-vars": ["error"],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "no-console": 1,
    "comma-dangle": [
      "error",
      {
        "arrays": "always-multiline",
        "exports": "always-multiline",
        "functions": "never",
        "imports": "always-multiline",
        "objects": "always-multiline"
      }
    ],
    "import/prefer-default-export": 0,
    "import/order": [
      "warn",
      {
        "alphabetize": {
          "order": "asc"
        },
        "groups": [
          "builtin",
          "external",
          ["internal", "unknown"],
          "parent",
          "sibling"
        ],
        "newlines-between": "always",
        "pathGroups": [
          {
            "group": "builtin",
            "pattern": "react",
            "position": "before"
          },
          {
            "group": "internal",
            "pattern": "routes/**"
          }
        ],
        "pathGroupsExcludedImportTypes": ["builtin"]
      }
    ],
    "max-len": [
      "error",
      {
        "code": 80,
        "ignoreComments": true,
        "ignoreRegExpLiterals": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true,
        "ignoreTrailingComments": true,
        "ignoreUrls": true,
        "tabWidth": 2
      }
    ],
    "max-params": [
      "error",
      {
        "max": 3
      }
    ],
    "semi": ["error", "never"],
    "sort-destructure-keys/sort-destructure-keys": 2,
    "sort-imports": [
      "error",
      {
        "ignoreDeclarationSort": true
      }
    ],
    "sort-vars": ["error"],
    "space-before-function-paren": [2, "always"],
    "react/react-in-jsx-scope": "off"
  }
}
