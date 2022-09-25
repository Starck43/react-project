module.exports = {
	//"root": true,
	env: {
		browser: true,
		es2021: true,
		jest: false
	},
	extends: [
		"airbnb",
		"airbnb/hooks",
		"plugin:react/recommended",
		"plugin:i18next/recommended",
		"plugin:promise/recommended",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		//project: "./tsconfig.json",
		jsx: true,
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: [
		"react",
		"@typescript-eslint",
		//"import",
		"i18next",
		"promise",
	],
	rules: {
		indent: [2, 4, {SwitchCase: 1, FunctionDeclaration: {"parameters": "first"}}],
		"react/jsx-indent": [2, 4],
		"react/jsx-indent-props": [2, 4],
		"react/jsx-filename-extension": [2, {"extensions": [".js", ".jsx", ".tsx"]}],
		"object-curly-spacing": ["error", "never", {"arraysInObjects": true}],
		"semi": ["error", "never"],
		"quotes": ["warn", "double"],
		"react/jsx-uses-react": "off",
		"react/react-in-jsx-scope": "off",
		"import/no-unresolved": "off",
		"import/prefer-default-export": "off",
		"no-unused-vars": "warn",
		"react/prop-types": "off",
		"react/require-default-props": "off",
		"react/jsx-closing-tag-location": "off",
		"react/function-component-definition": "off",
		"react/jsx-props-no-spreading": "warn",
		"react-hooks/exhaustive-deps": "warn",
		"no-shadow": "off",
		"import/extensions": "off",
		"import/no-extraneous-dependencies": "off",
		"max-len": "warn",
		"jsx-a11y/no-noninteractive-element-to-interactive-role": "warn",
		"no-underscore-dangle": "off",
		"no-multiple-empty-lines": "off",
		"i18next/no-literal-string": [2, {markupOnly: true}]
	},
	globals: {
		"__IS_DEV__": true,
	},
	settings: {
		react: {
			version: "detect"
		}
	}
}
