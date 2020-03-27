module.exports = {
  env: {
    browser: true,
    es6: true,
    node: false,
    jasmine: true,
  },
  "extends": [
    "eslint:recommended",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:testcafe/recommended"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    State: "writeable",
    setup: "writeable"
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint", "testcafe"],
  rules: {
    "@typescript-eslint/no-empty-function": ["off"],
    "quotes": ["off"],
    "no-plusplus": ["off"],
    "@typescript-eslint/camelcase": ["off"],
    "@typescript-eslint/triple-slash-reference": ["off"],
  }
};
