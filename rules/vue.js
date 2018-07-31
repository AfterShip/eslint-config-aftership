'use strict';

module.exports = {
	plugins: ['vue'],
	parserOptions: {
		ecmaVersion: 2017,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		'import/extensions': ['.js', '.vue'],
	},
	rules: {
		'import/extensions': ['error',
			{
				vue: 'never',
			}],
		// ++++++++++++++ //
		// Best Practices //
		// ++++++++++++++ //

		// self close tag is required for xml, not for html tags like
		// <br> <img> <input>
		// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-end-tags.md
		'vue/html-end-tags': 'error',

		// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-no-self-closing.md
		'vue/html-no-self-closing': 'error',

		'vue/order-in-components': ['error'],

		// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-duplicate-attributes.md
		'vue/no-duplicate-attributes': 'error',

		// ++++++++++++++ //
		//     Styles     //
		// ++++++++++++++ //

		// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/html-quotes.md
		'vue/html-quotes': ['error', 'double'],

		// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/v-bind-style.md
		'vue/v-bind-style': ['error', 'shorthand'],

		// https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/v-on-style.md
		'vue/v-on-style': ['error', 'shorthand'],
	},
};
