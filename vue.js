'use strict';

const extendConfig = require('./lib/extend_config');

module.exports = extendConfig({
	extends: [
		'eslint-config-airbnb/base',
		'eslint-config-aftership/rules/main',
		'eslint-config-aftership/rules/frontend',
		'eslint-config-aftership/rules/camelcase'
	],
	parserOptions: {
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
});
