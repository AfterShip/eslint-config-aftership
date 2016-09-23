'use strict';

const extendConfig = require('./lib/extend_config');

module.exports = extendConfig({
	extends: [
		'eslint-config-airbnb',
		'eslint-config-aftership/rules/main',
		'eslint-config-aftership/rules/camelcase'
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		}
	},
	env: {
		commonjs: true,
		node: false,
		webextensions: true
	},
	globals: {
		console: false, // for console.log
		process: false, // for process.env.NODE_ENV
		window: false
	},
	rules: {
		// we alias some local folders to modules, for example `project-root/src/app` => `app`
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/imports-first.md
		'import/imports-first': 'off',

		// it fails with inject-loader
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
		'import/no-unresolved': 'off',

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
		'react/prefer-stateless-function': 'warn',

		// Don't want to check default props
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
		'react/prop-types': ['error', {ignore: ['children']}]
	}
});
