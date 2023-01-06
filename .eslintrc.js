module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        "airbnb",
        "airbnb/hooks",
        "plugin:react/recommended",
        "plugin:i18next/recommended",
        "plugin:storybook/recommended",
        "prettier",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        jsx: true,
        ecmaVersion: 2021,
        sourceType: "module",
    },
    plugins: [
        "react",
        "@typescript-eslint",
        "i18next",
        "react-hooks",
        "import",
        "unused-imports",
        "paths-observer", // custom plugin
    ],
    rules: {
        indent: [
            "error",
            4,
            { SwitchCase: 1, FunctionDeclaration: { parameters: "first" } },
        ],
        "comma-dangle": ["error", "only-multiline"],
        "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
        "no-undef": "off",
        "max-len": [
            0,
            {
                code: 120,
                comments: 200,
                ignorePattern: true,
                ignoreComments: true,
                ignoreUrls: true,
                ignoreStrings: true,
            },
        ],
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                vars: "local",
                args: "after-used",
                ignoreRestSiblings: false,
                argsIgnorePattern: "^_",
            },
        ],
        "no-unused-vars": "off",
        "no-shadow": "off",
        "no-param-reassign": "off",
        "no-underscore-dangle": "off",
        "no-multiple-empty-lines": "off",
        "no-nested-ternary": "off",
        "no-trailing-spaces": [
            "warn",
            { skipBlankLines: false, ignoreComments: true },
        ],
        "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
        "newline-per-chained-call": ["error", { ignoreChainWithDepth: 3 }],
        "lines-between-class-members": [ "error", "always", {exceptAfterSingleLine: true}],
        // "padding-line-between-statements": [ "error", { "blankLine": "always", "prev": "*", "next": "export" }],
        "react/jsx-filename-extension": [
            "warn",
            { extensions: [".tsx", ".jsx"] },
        ],
        "react/jsx-max-props-per-line": [
            "error",
            { maximum: { single: 4, multi: 2 } },
        ],
        "react/jsx-uses-react": "off",
        "react/jsx-props-no-spreading": "off",
        "react/jsx-one-expression-per-line": "off",
        "react/jsx-closing-tag-location": "off",
        "react/display-name": "off",
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "react/require-default-props": "off",
        "react/function-component-definition": "off",
        "react/no-array-index-key": "warn",
        "react-hooks/exhaustive-deps": "error",
        "react-hooks/rules-of-hooks": "error",
        "jsx-a11y/no-noninteractive-element-to-interactive-role": "warn",
        "jsx-a11y/no-static-element-interactions": [
            "error",
            {
                handlers: [
                    "onClick",
                    "onMouseDown",
                    "onMouseUp",
                    "onKeyPress",
                    "onKeyDown",
                    "onKeyUp",
                ],
                allowExpressionValues: true,
            },
        ],
        "array-element-newline": [
            "error",
            { ArrayExpression: "consistent", ArrayPattern: { minItems: 5 } },
        ],
        // "array-bracket-spacing": [ 1, "always" ],
        // "object-curly-spacing": [ "error", "never", {arraysInObjects: true} ],
        "object-curly-newline": [
            "warn",
            {
                ObjectPattern: {
                    multiline: true,
                    minProperties: 5,
                },
                ImportDeclaration: {
                    multiline: true,
                    minProperties: 5,
                },
                ExportDeclaration: {
                    multiline: true,
                    minProperties: 5,
                },
            },
        ],
        "unused-imports/no-unused-imports": "warn",
        // "import/newline-after-import": ["error", { count: 2 }],
        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
        "import/extensions": "off",
        "import/no-extraneous-dependencies": "off",
        "import/order": [
            "error",
            {
                groups: [
                    "builtin",
                    "external",
                    "internal",
                    "object",
                    "type",
                    "parent",
                    "sibling",
                    "index",
                ],
                pathGroups: [
                    {
                        pattern: "react",
                        group: "builtin",
                        position: "before",
                    },
                    {
                        pattern: "@/app/**",
                        group: "internal",
                        position: "after",
                    },
                    {
                        pattern: "@/entities/**",
                        group: "internal",
                        position: "after",
                    },
                    {
                        pattern: "@/features/**",
                        group: "internal",
                        position: "after",
                    },
                    {
                        pattern: "@/shared/**",
                        group: "internal",
                        position: "after",
                    },
                    {
                        pattern: "@/widgets/**",
                        group: "internal",
                        position: "after",
                    },
                ],
                pathGroupsExcludedImportTypes: ["parent"],
                "newlines-between": "ignore",
            },
        ],
        "i18next/no-literal-string": [
            "warn",
            {
                markupOnly: true,
                // ignoreAttribute: [ "data-testid", "to", "target" ],
                onlyAttribute: [""],
            },
        ],
        "paths-observer/only-relative-imports-in-layer": [
            "error",
            { alias: "@" },
        ],
        "paths-observer/only-public-api-imports": [
            "error",
            {
                alias: "@",
                ignoreFilePatterns: ["**/StoreDecorator.tsx"],
            },
        ],
        "paths-observer/layer-imports-order": [
            "error",
            {
                alias: "@",
                ignoreImportPatterns: [
                    "**/store-provider",
                    "**/theme-provider",
                    "**/router-provider",
                    "*/app/styles/**",
                    "**/storybook",
                ],
            },
        ],
    },
    overrides: [
        {
            files: ["**/src/**/*.{test,stories}.{ts,tsx}"],
            rules: {
                "i18next/no-literal-string": "off",
                "max-len": "off",
            },
        },
    ],
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
    settings: { react: { version: "detect" } },
}
