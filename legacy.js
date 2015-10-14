'use strict';

var extendConfig = require('./lib/extend_config');

module.exports = extendConfig({
	extends: [
		'eslint-config-airbnb/legacy',
		'eslint-config-aftership/aftership'
	],
	ecmaFeatures: {
		generators: false
	},
	rules: {
		/*++++++++++++++
		 + Strict Mode +
		 ++++++++++++++*/
		// http://eslint.org/docs/rules/strict
		strict: [2, 'global']
	}
});
