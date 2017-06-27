'use strict';

module.exports = {
	extends: [
		'./index',
		'./rules/react'
	].map(require.resolve),
	parserOptions: {
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true
		}
	},
	rules: {
		// in react, we have babel anyway, it auto inserts the `use strict` for us
		strict: ['error', 'never'],

		// require camel case names
		camelcase: ['off', {properties: 'never'}],

		// for array, sometime it is not all the same type
		// for object, it is very painful to define the object structure every time
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
		'react/forbid-prop-types': 'off',

		// Use tab instead of 2 space when indenting jsx elements
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
		'react/jsx-indent': ['error', 'tab'],

		// Use tab instead of 2 space when indenting jsx properties
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
		'react/jsx-indent-props': ['error', 'tab'],

		// We found it is not practical when we need to bind `props` to function
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
		'react/jsx-no-bind': 'off',

		// we need to use dangerouslySetInnerHTML sometime
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
		'react/no-danger': 'off',

		// Will move to `error` when `isMounted` is deprecated
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
		'react/no-is-mounted': 'error',

		// We want to define multiple components within one file
		// for example, for table.jsx, define header component and footer component in the same file
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
		'react/no-multi-comp': 'off',

		// ES6 class is not so stable using babel.js and it requires developers to define variables out of the class
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
		'react/prefer-es6-class': 'off',

		// we should aim to write stateless components, but we should not enforce now because it breaks a lot of code
		// ignorePureComponents because PureComponents helps improving performance and make the flow easier to understand
		'react/prefer-stateless-function': ['warn', {
			ignorePureComponents: true
		}],

		// Don't want to check default props
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
		'react/prop-types': ['error', {ignore: ['children']}],

		// this rule is deprecated
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-extension.md
		'react/require-extension': 'off'
	}
};
