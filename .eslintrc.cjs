/*eslint-env node*/

module.exports = {
  env: {
    browser: true,
    es2020: true,
    "jest/globals": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jest/recommended",
    "plugin:react/recommended",
    "plugin:storybook/recommended",
    "plugin:import/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react-refresh", "react", "jest", "@emotion"],
  settings: {
    "import/resolver": {
      typescript: true,
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
      },
    },
  },
  rules: {
    "react-refresh/only-export-components": "warn",
    "no-underscore-dangle": 0,
    "import/extensions": [
      "error",
      "never",
      {
        json: "always",
        svg: "always",
      },
    ],
    "@emotion/syntax-preference": [2, "object"],
    "@typescript-eslint/no-empty-interface": "off",
  },
};
