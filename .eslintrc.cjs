/* eslint-disable no-undef */
module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    root: true,
    tsconfigRootDir: __dirname,
    ecmaVersion: 2018,
    project: "./tsconfig.json",
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "airbnb-typescript",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "plugin:react/jsx-runtime",
  ],
  plugins: ["@typescript-eslint", "import", "jsx-a11y", "prettier"],
  rules: {
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: ["parameter", "variable"],
        format: ["camelCase", "PascalCase", "UPPER_CASE"],
        leadingUnderscore: "allowSingleOrDouble",
      },
    ],
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-shadow": "warn",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/no-use-before-define": "off",
    "import/order": [
      "error",
      {
        alphabetize: { order: "asc" },
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
        ],
        pathGroups: [
          {
            pattern: "react",
            group: "builtin",
            position: "before",
          },
          {
            pattern: "@fastly/*",
            group: "internal",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin", "internal"],
        "newlines-between": "always",
        warnOnUnassignedImports: true,
      },
    ],
    "jsx-a11y/label-has-associated-control": ["error", {
      "required": {
        "some": ["nesting"]
      }
    }],
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          "**/*.test.*",
          "**/test/**/*.*",
          "**/*.stories.*",
          "**/.storybook/**/*.*",
        ],
        "peerDependencies": true
      }
    ],
    'import/no-unresolved': [
      'error',
      {
        ignore: ['@storybook'],
      },
    ],
    "react/sort-default-props": ["error", {}],
    "react/jsx-key": [
      "warn",
      {
        checkFragmentShorthand: true,
      },
    ],
    "react/jsx-sort-props": [
      "error",
      {
        callbacksLast: true,
        reservedFirst: ["key", "ref"],
        shorthandLast: true,
      },
    ],
    "react/sort-prop-types": [
      "error",
      {
        callbacksLast: true,
        requiredFirst: true,
        sortShapeProp: true,
      },
    ],
    // Prettier takes care of this stuff
    "@typescript-eslint/quotes": "off",
    "@typescript-eslint/indent": "off",
    "array-callback-return": "error",
    "consistent-return": "off",
    "import/prefer-default-export": 0,
    "no-param-reassign": "warn",
    "no-use-before-define": "off",
    "prefer-template": "off",
    "prettier/prettier": "error",
    "react/destructuring-assignment": "off",
    "react/function-component-definition": "off",
    "react/jsx-props-no-spreading": "off",
    // Prettier takes care of this stuff
    "react/jsx-closing-tag-location": "off",
    "react/jsx-indent": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-wrap-multilines": "off",
    "react/no-children-prop": 0,
    "react/no-unused-prop-types": "off",
    "react/prop-types": "off",
    "react/require-default-props": 0,
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        project: ["./tsconfig.json"],
      },
      typescript: {
        alwaysTryTypes: true,
        project: ["./tsconfig.json"],
      },
    },
    overrides: [
      {
        env: {
          jest: true,
        },
        files: [
          "**/__tests__/**/*.[jt]s?(x)",
          "**/?(*.).+(spec|test).[jt]s?(x)",
        ],
        extends: ["plugin:testing-library/react", "plugin:jest/recommended"],
      },
    ],
    ignorePatterns: ["**/*.json", "node_modules", "public", "**/*.config.ts"],
  },
};
