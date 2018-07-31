'use strict';

module.exports = {
	extends: ['./rules/best-practices',
		'./rules/errors',
		'./rules/es6',
		'./rules/strict',
		'./rules/node',
		'./rules/style',
		'./rules/variables'].map(require.resolve),
	parserOptions: {
		ecmaVersion: 2018,
		// we use require() instead of `import ... from ...`
		sourceType: 'script',
	},
	rules: {},
};
