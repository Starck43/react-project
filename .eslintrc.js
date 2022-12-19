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
        "no-tabs": 0,
        indent: [
            0, 4, {
                SwitchCase: 1,
                FunctionDeclaration: {parameters: "first"},
            },
        ],
        semi: [ 1, "never" ],
        quotes: [ 1, "double" ],
        "no-undef": "off",
        "no-mixed-spaces-and-tabs": [ 2, "smart-tabs" ],
        "max-len": [
            0, {
                code: 120,
                comments: 200,
                ignorePattern: true,
                ignoreComments: true,
                ignoreUrls: true,
                ignoreStrings: true,
            },
        ],
        "@typescript-eslint/no-unused-vars": [
            "warn", {
                vars: "local",
                args: "after-used",
                ignoreRestSiblings: false,
                argsIgnorePattern: "^_",
            },
        ],
        "no-unused-vars": "off",
        "array-bracket-spacing": [ 1, "always" ],
        "react/jsx-indent": [ 2, 4 ],
        "react/jsx-indent-props": [ 2, 4 ],
        "react/jsx-filename-extension": [ 2, {extensions: [ ".js", ".jsx", ".tsx" ] } ],
        "object-curly-spacing": [ "error", "never", {arraysInObjects: true} ],
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
        "react/prop-types": "off",
        "react/require-default-props": "off",
        "react/jsx-closing-tag-location": "off",
        "react/function-component-definition": "off",
        "react/jsx-props-no-spreading": "off",
        "react-hooks/exhaustive-deps": "error",
        "react-hooks/rules-of-hooks": "error",
        "react/display-name": "off",
        "react/jsx-one-expression-per-line": "off",
        "no-shadow": "off",
        "no-param-reassign": "off",
        "no-underscore-dangle": "off",
        "no-multiple-empty-lines": "off",
        "no-nested-ternary": "off",
        "lines-between-class-members": [ "error", "always", {exceptAfterSingleLine: true} ],
        "no-plusplus": [ "error", {allowForLoopAfterthoughts: true} ],
        "import/extensions": "off",
        "import/no-extraneous-dependencies": "off",
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
        "jsx-a11y/no-noninteractive-element-to-interactive-role": "warn",
        "react/no-array-index-key": "warn",
        "i18next/no-literal-string": [
            "warn", {
                markupOnly: true,
                // ignoreAttribute: [ "data-testid", "to", "target" ],
                onlyAttribute: [ "" ],
            },
        ],
        "array-element-newline": [
            "error", {
                ArrayExpression: "consistent",
                ArrayPattern: {minItems: 5},
            },
        ],
        "object-curly-newline": [
            "warn", {
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
        "unused-imports/no-unused-imports": "warn",
        "paths-observer/only-relative-imports-in-layer": [ "error", {alias: "@"} ],
        "paths-observer/only-public-api-imports": [
            "error", {
                alias: "@",
                ignoreFilePatterns: [ "**/StoreDecorator.tsx" ],
            },
        ],
        "paths-observer/layer-imports-order": [
            "error", {
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
            files: [ "**/src/**/*.{test,stories}.{ts,tsx}" ],
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
    settings: {react: {version: "detect"}},
}
