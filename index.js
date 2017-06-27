'use strict';

module.exports = {
	extends: [
		'./rules/best-practices',
		'./rules/errors',
		'./rules/es6',
		'./rules/strict',
		'./rules/imports',
		'./rules/node',
		'./rules/style',
		'./rules/variables'
	].map(require.resolve),
	env: {
		mocha: true,
		node: true
	},
	parserOptions: {
		ecmaVersion: 2017,
		// we use require() instead of `import ... from ...`
		sourceType: 'script'
	},
	rules: {}
};
