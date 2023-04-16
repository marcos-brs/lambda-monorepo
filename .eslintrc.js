module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ["standard-with-typescript", "prettier"],
  overrides: [],
  parser: "@typescript-eslint/parser",
  rules: {
    'no-new': 'off',
  },
  ignorePatterns: ["*.js", "*.d.ts"],
  parserOptions: {
    project: ['./tsconfig.json'],
  },
};
