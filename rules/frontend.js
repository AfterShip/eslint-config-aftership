'use strict';

module.exports = {
	env: {
		commonjs: true,
		node: false,
		webextensions: true
	},
	plugins: [
		'html'
	],
	settings: {
		'html/indent': 'tab',
		'html/report-bad-indent': 'error'
	},
	globals: {
		console: false, // for console.log
		document: false,
		process: false, // for process.env.NODE_ENV
		window: false
	},
	rules: {
		// we alias some local folders to modules, for example `project-root/src/app` => `app`
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/imports-first.md
		'import/imports-first': 'off',

		// it fails with inject-loader
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
		'import/no-unresolved': 'off'
	}
};
