'use strict';

var extendConfig = require('./lib/extend_config');

module.exports = extendConfig({
	extends: [
		'eslint-config-airbnb/base',
		'eslint-config-aftership/rules/main'
	],
	parserOptions: {
		ecmaFeatures: {
			// if you want to use jsx, extends "aftership/react"
			jsx: false
		},
		// we use require() instead of `import ... from ...`
		sourceType: 'script'
	},
	rules: {
		/*++++++++++++++
		 + Strict Mode +
		 ++++++++++++++*/
		// http://eslint.org/docs/rules/strict
		strict: [2, 'global']
	}
});
