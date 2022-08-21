module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier", "import"],
  rules: {
    // "no-console": ["error", { allow: ["warn", "error"] }],
    "@typescript-eslint/ban-ts-comment": "off",
    "import/extensions": 0,
    "prettier/prettier": "error",
    camelcase: 0, // Camelcasing needs to be disabled to allow format of data in API responses. e.g. UserData interface
    semi: [2, "always"],
    "import/no-extraneous-dependencies": 0,
    "no-use-before-define": 0,
    "import/no-cycle": [2, { maxDepth: 1 }],
    "import/no-named-as-default": 0,
    "import/default": 0,
    "import/prefer-default-export": 0,
  },
  settings: {
    "import/ignore": [".svg"],
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
