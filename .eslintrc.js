module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  "import/resolver": {
    typescript: {}
  },
  plugins: ["import"],
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
