'use strict';

var extendConfig = require('./lib/extend_config');

module.exports = extendConfig({
	extends: [
		'eslint-config-airbnb/base',
		'eslint-config-aftership/rules/main'
	],
	ecmaFeatures: {
		// not stable and require harmony flag to enable
		destructuring: false,

		// if you want to use jsx, extends "aftership/react"
		jsx: false,

		// we use require() instead of `import ... from ...`
		modules: false
	},
	rules: {
		/*++++++++++++++
		 + Strict Mode +
		 ++++++++++++++*/
		// http://eslint.org/docs/rules/strict
		strict: [2, 'global']
	}
});
