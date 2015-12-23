'use strict';

var extendConfig = require('./lib/extend_config');

module.exports = extendConfig({
	extends: [
		'eslint-config-airbnb',
		'eslint-config-aftership/aftership'
	],
	rules: {
		// Use tab instead of 2 space when indenting jsx properties
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
		'react/jsx-indent-props': [2, 'tab'],

		// we want to define multiple components within one file
		// for example, for table.jsx, define header component and footer component in the same file
		'react/no-multi-comp': 0,

		// don't want to check default props
		'react/prop-types': [2, {ignore: ['children']}]
	}
});
