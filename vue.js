'use strict';

module.exports = {
	extends: ['./index',
		'./rules/imports',
		'./rules/frontend',
		'./rules/vue'].map(require.resolve).concat(['plugin:vue/recommended']),
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: 'babel-eslint',
		sourceType: 'module',
		ecmaVersion: 2017,
		ecmaFeatures: {
			jsx: true,
			experimentalObjectRestSpread: true,
		},
	},
	rules: {
		// this two doesn't work in vue
		'import/no-named-as-default': 'off',
		'import/no-named-as-default-member': 'off',
	},
};
