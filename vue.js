'use strict';

module.exports = {
	extends: [
		'./index'
	].map(require.resolve),
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
		// require camel case names
		camelcase: ['off', {properties: 'never'}],
		// this two doesn't work in vue
		'import/no-named-as-default': 'off',
		'import/no-named-as-default-member': 'off'
	}
};
