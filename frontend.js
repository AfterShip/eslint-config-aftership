'use strict';

module.exports = {
	extends: ['./index',
		'./rules/imports',
		'./rules/frontend'].map(require.resolve),
	parser: 'babel-eslint',
	env: {
		node: false,
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2017,
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
		},
	},
	rules: {
		// this two doesn't work in vue
		'import/no-named-as-default': 'off',
		'import/no-named-as-default-member': 'off',
	},
};
