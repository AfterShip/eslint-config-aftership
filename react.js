'use strict';

module.exports = {
	extends: [
		'./index',
		'./rules/frontend',
		'./rules/react'
	].map(require.resolve),
	// babel-eslint could help to parse static propTypes = {...}
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2017,
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true
		}
	},
	rules: {}
};
