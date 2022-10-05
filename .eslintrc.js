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
        "react", "@typescript-eslint", "i18next", "react-hooks", // "promise",
    ],
    rules: {
        indent: [
            0, 4, {
                SwitchCase: 1,
                FunctionDeclaration: {parameters: "first"},
            },
        ],
        "array-bracket-spacing": [ 1, "always" ],
        "no-tabs": 0,
        "react/jsx-indent": [ 2, 4 ],
        "react/jsx-indent-props": [ 2, 4 ],
        "react/jsx-filename-extension": [ 2, {extensions: [ ".js", ".jsx", ".tsx" ] } ],
        "object-curly-spacing": [ "error", "never", {arraysInObjects: true} ],
        semi: [ 1, "never" ],
        quotes: [ 1, "double" ],
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",
        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
        "no-unused-vars": [
            "warn", {
                vars: "local",
                args: "after-used",
                ignoreRestSiblings: false,
            },
        ],
        "react/prop-types": "off",
        "react/require-default-props": "off",
        "react/jsx-closing-tag-location": "off",
        "react/function-component-definition": "off",
        "react/jsx-props-no-spreading": "warn",
        "react-hooks/exhaustive-deps": "error",
        "react-hooks/rules-of-hooks": "error",
        "no-shadow": "off",
        "no-param-reassign": "off",
        "import/extensions": "off",
        "import/no-extraneous-dependencies": "off",
        "no-undef": "warn",
        "react/display-name": "off",
        "no-mixed-spaces-and-tabs": [ 2, "smart-tabs" ],
        "max-len": [
            1, {
                code: 100,
                ignoreComments: true,
                ignoreUrls: true,
                ignoreStrings: true,
            },
        ],
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
        "no-underscore-dangle": "off",
        "no-multiple-empty-lines": "off",
        "i18next/no-literal-string": [
            1, {
                markupOnly: true,
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
            "error", {
                ObjectExpression: {
                    multiline: true,
                    minProperties: 3,
                },
                ObjectPattern: {
                    multiline: true,
                    minProperties: 5,
                },
                ImportDeclaration: "never",
                ExportDeclaration: {
                    multiline: true,
                    minProperties: 3,
                },
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
    globals: {__IS_DEV__: true},
    settings: {react: {version: "detect"}},
}
