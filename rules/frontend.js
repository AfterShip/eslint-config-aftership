'use strict';

module.exports = {
	env: {
		commonjs: true,
		webextensions: true,
		browser: true,
	},
	plugins: ['html'],
	settings: {
		'html/indent': 'tab',
		'html/report-bad-indent': 'error',
		'html/html-extensions': ['.html', '.pug', '.ejs'],
	},
	globals: {
		console: false, // for console.log
		document: false,
		process: false, // for process.env.NODE_ENV
		window: false,
	},
	rules: {
		// in react, we have babel anyway, it auto inserts the `use strict` for us
		strict: ['error', 'never'],

		// require camel case names
		// some config properties may have underscore names which is okay
		camelcase: ['error', {properties: 'never', ignoreDestructuring: true}],
	},
};
