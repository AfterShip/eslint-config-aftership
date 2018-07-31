'use strict';

module.exports = {
	extends: ['./index',
		'./rules/imports',
		'./rules/frontend',
		'./rules/react',
		'./rules/react-a11y'].map(require.resolve),
	// babel-eslint could help to parse static propTypes = {...}
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2017,
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true,
		},
	},
	rules: {},
};
