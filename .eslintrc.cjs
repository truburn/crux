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
    "prettier",
    "plugin:storybook/recommended",
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
  rules: {
    "react-refresh/only-export-components": "warn",
    "no-underscore-dangle": 0,
    "import/extension": [
      "error",
      "ignorePackages",
      {
        js: "always",
        jsx: "always",
        ts: "always",
        tsx: "always",
      },
    ],
    "@emotion/syntx-preference": [2, "object"],
  },
};
