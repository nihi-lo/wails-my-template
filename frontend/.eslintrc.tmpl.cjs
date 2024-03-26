/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", "wailsjs", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  plugins: [
    "@typescript-eslint",
    "import",
    "react-refresh",
    "strict-dependencies",
    "unused-imports",
  ],
  rules: {
    /* @typescript-eslint */
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "@typescript-eslint/no-unused-vars": "off",

    /* import */
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal", ["parent", "sibling"], "index"],
        "newlines-between": "always",
        pathGroupsExcludedImportTypes: ["builtin"],
        alphabetize: { order: "asc", caseInsensitive: true },
        pathGroups: [
          {
            pattern: "@wailsjs/**",
            group: "internal",
            position: "before",
          },
          {
            pattern: "@{{.ProjectName}}/App",
            group: "internal",
            position: "before",
          },
          {
            pattern: "@{{.ProjectName}}/hooks/**",
            group: "internal",
            position: "before",
          },
          {
            pattern: "@{{.ProjectName}}/components/**",
            group: "internal",
            position: "before",
          },
        ],
      },
    ],

    /* react-refresh */
    "react-refresh/only-export-components": [
      "warn",
      {
        allowConstantExport: true,
      },
    ],

    /* strict-dependencies */
    "strict-dependencies/strict-dependencies": [
      "error",
      [
        {
          module: "src/components/page",
          allowReferenceFrom: ["src/App.tsx"],
          allowSameModule: false,
        },
        {
          module: "src/components/model",
          allowReferenceFrom: ["src/components/page"],
          allowSameModule: true,
        },
        {
          module: "src/components/ui",
          allowReferenceFrom: ["src/components/page", "src/components/model"],
          allowSameModule: true,
        },
      ],
    ],

    /* unused-imports */
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
  },
};

module.exports = config;
