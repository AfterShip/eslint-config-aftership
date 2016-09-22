'use strict';

module.exports = {
	env: {
		// most of our project is back-end project
		browser: false,

		// recognize the predefined variables of mocha
		mocha: true
	},
	rules: {
		/*++++++++++++++++++
		 + Possible Errors +
		 ++++++++++++++++++*/
		// http://eslint.org/docs/rules/comma-dangle
		'comma-dangle': ['error', 'never'],

		// http://eslint.org/docs/rules/no-console
		'no-console': 'off',

		// http://eslint.org/docs/rules/valid-typeof
		'valid-typeof': ['error', {
			requireStringLiterals: false
		}],

		/*+++++++++++++++++
		 + Best Practices +
		 +++++++++++++++++*/
		// http://eslint.org/docs/rules/class-methods-use-this
		'class-methods-use-this': 'off',

		// http://eslint.org/docs/rules/no-alert
		'no-alert': 'off',

		// http://eslint.org/docs/rules/no-else-return
		'no-else-return': 'off',

		// http://eslint.org/docs/rules/no-implicit-coercion
		'no-implicit-coercion': 'error',

		// http://eslint.org/docs/rules/no-loop-func
		'no-loop-func': 'off',

		// http://eslint.org/docs/rules/no-new
		'no-new': 'off',

		// http://eslint.org/docs/rules/no-param-reassign
		'no-param-reassign': 'off',

		// http://eslint.org/docs/rules/no-script-url
		'no-script-url': 'off',

		// http://eslint.org/docs/rules/no-throw-literal
		'no-throw-literal': 'off',

		// http://eslint.org/docs/rules/no-unused-expressions
		'no-unused-expressions': 'off',

		// http://eslint.org/docs/rules/vars-on-top
		'vars-on-top': 'off',

		/*++++++++++++
		 + Variables +
		 ++++++++++++*/
		// http://eslint.org/docs/rules/no-shadow
		'no-shadow': ['error', {
			builtinGlobals: true
		}],

		// http://eslint.org/docs/rules/no-unused-vars
		'no-unused-vars': ['error', {
			args: 'none',
			vars: 'local',
			varsIgnorePattern: '^_'
		}],

		// http://eslint.org/docs/rules/no-use-before-define
		'no-use-before-define': 'off',

		/*+++++++++++++++++++++++
		 + Node.js and CommonJS +
		 +++++++++++++++++++++++*/
		// http://eslint.org/docs/rules/global-require
		'global-require': 'off',

		// http://eslint.org/docs/rules/no-mixed-requires
		'no-mixed-requires': 'error',

		/*+++++++++++++++++++
		 + Stylistic Issues +
		 +++++++++++++++++++*/
		// http://eslint.org/docs/rules/camelcase
		camelcase: 'off',

		// http://eslint.org/docs/rules/func-names
		'func-names': 'off',

		// http://eslint.org/docs/rules/indent
		indent: ['error', 'tab', {
			SwitchCase: 1
		}],

		// http://eslint.org/docs/rules/no-tabs
		'no-tabs': 'off',

		// http://eslint.org/docs/rules/new-cap
		'new-cap': 'off',

		// http://eslint.org/docs/rules/no-continue
		'no-continue': 'off',

		// http://eslint.org/docs/rules/no-lonely-if
		'no-lonely-if': 'off',

		// http://eslint.org/docs/rules/no-mixed-operators
		'no-mixed-operators': 'off',

		// http://eslint.org/docs/rules/no-underscore-dangle
		'no-underscore-dangle': 'off',

		// http://eslint.org/docs/rules/object-curly-spacing
		'object-curly-spacing': ['error', 'never'],

		// http://eslint.org/docs/rules/quote-props
		'quote-props': 'off',

		/*+++++++++++++++
		 + ECMAScript 6 +
		 +++++++++++++++*/
		// http://eslint.org/docs/rules/arrow-body-style
		'arrow-body-style': 'off',

		// http://eslint.org/docs/rules/object-shorthand
		'object-shorthand': 'off',

		// http://eslint.org/docs/rules/prefer-arrow-callback
		'prefer-arrow-callback': 'off',

		// http://eslint.org/docs/rules/prefer-const
		'prefer-const': 'off',

		// http://eslint.org/docs/rules/prefer-rest-params
		'prefer-rest-params': 'off',

		// http://eslint.org/docs/rules/prefer-template
		'prefer-template': 'off',

		// http://eslint.org/docs/rules/require-yield
		'require-yield': 'off',

		/*+++++++++
		 + Legacy +
		 +++++++++*/
		// http://eslint.org/docs/rules/max-len
		'max-len': ['error', 200, 2, {
			ignoreUrls: true,
			ignoreComments: false,
			ignoreStrings: true,
			ignoreTemplateLiterals: true
		}],

		/*++++++++++++++++
		 + Other plugins +
		 ++++++++++++++++*/
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
		'import/no-extraneous-dependencies': 'off'
	}
};
