'use strict';

module.exports = {
	extends: [
		'plugin:vue/recommanded'
	].concat([
		'./index',
		'./rules/frontend',
		'./rules/vue'
	].map(require.resolve)),
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module',
		ecmaFeatures: {
			experimentalObjectRestSpread: true
		}
	},
	settings: {
		'import/extensions': ['.js', '.vue'],
		'import/resolver': {
			node: {
				extensions: ['.js', '.vue', '.json']
			}
		}
	},
	rules: {
		// this two doesn't work in vue
		'import/no-named-as-default': 'off',
		'import/no-named-as-default-member': 'off'
	}
};
