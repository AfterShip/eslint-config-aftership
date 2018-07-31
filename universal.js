'use strict';

module.exports = {
	extends: ['./rules/best-practices',
		'./rules/errors',
		'./rules/es6',
		'./rules/imports',
		'./rules/frontend',
		'./rules/node',
		'./rules/style',
		'./rules/variables'].map(require.resolve),
	env: {
		node: true,
		browser: true,
	},
	parserOptions: {
		ecmaVersion: 2017,
		// in universal projects, we use import/export
		sourceType: 'module',
	},
	rules: {},
};
