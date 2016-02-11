'use strict';

var extendConfig = require('./lib/extend_config');

module.exports = extendConfig({
	extends: [
		'eslint-config-airbnb',
		'eslint-config-aftership/rules/main'
	],
	env: {
		browser: true
	},
	rules: {
		// Use tab instead of 2 space when indenting jsx properties
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
		'react/jsx-indent-props': [2, 'tab'],

		// We found it is not practical when we need to bind `props` to function
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
		'react/jsx-no-bind': 0,

		// Will move to `error` when `isMounted` is deprecated
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
		'react/no-is-mounted': 2,

		// We want to define multiple components within one file
		// for example, for table.jsx, define header component and footer component in the same file
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
		'react/no-multi-comp': 0,

		// ES6 class is not so stable using babel.js and it requires developers to define variables out of the class
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
		'react/prefer-es6-class': 0,

		// Don't want to check default props
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
		'react/prop-types': [2, {ignore: ['children']}]
	}
});
