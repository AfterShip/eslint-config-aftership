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

		// if requireStringLiterals is true, it doesn't allow using variable to compare
		// with `typeof another_variable`, which we do it often when creating library
		// http://eslint.org/docs/rules/valid-typeof
		'valid-typeof': ['error', {
			requireStringLiterals: false
		}],

		/*+++++++++++++++++
		 + Best Practices +
		 +++++++++++++++++*/
		// don't force every class methods to use `this`
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

		// Allow resign the parameter's value of function
		// http://eslint.org/docs/rules/no-param-reassign
		'no-param-reassign': 'off',

		// we want to preserve the semantic meaning of link, such as `<a href="javascript:void(0)"></a>`
		// http://eslint.org/docs/rules/no-script-url
		'no-script-url': 'off',

		// http://eslint.org/docs/rules/no-throw-literal
		'no-throw-literal': 'off',

		// syntax of `chai` will throw this error
		// http://eslint.org/docs/rules/no-unused-expressions
		'no-unused-expressions': 'off',

		// http://eslint.org/docs/rules/vars-on-top
		'vars-on-top': 'off',

		/*++++++++++++
		 + Variables +
		 ++++++++++++*/
		// prevents shadowing of built-in global variables
		// http://eslint.org/docs/rules/no-shadow
		'no-shadow': ['error', {
			builtinGlobals: true
		}],

		// allow used var in arguments, and ignore all variable that start with `_` such as `_this`
		// http://eslint.org/docs/rules/no-unused-vars
		'no-unused-vars': ['error', {
			args: 'none',
			vars: 'local',
			varsIgnorePattern: '^_'
		}],

		// we may need to use the function before we define it, check `js hoisting`
		// http://eslint.org/docs/rules/no-use-before-define
		'no-use-before-define': 'off',

		/*+++++++++++++++++++++++
		 + Node.js and CommonJS +
		 +++++++++++++++++++++++*/
		// backend code needs more dynamic structure
		// frontend need to use require.ensure which need to require inside a function
		// http://eslint.org/docs/rules/global-require
		'global-require': 'off',

		// to group require together for better readability
		'no-mixed-requires': 'error',

		/*+++++++++++++++++++
		 + Stylistic Issues +
		 +++++++++++++++++++*/
		// we use snake case
		// http://eslint.org/docs/rules/camelcase
		camelcase: 'off',

		// don't force to add function name in anonymous function
		// http://eslint.org/docs/rules/func-names
		'func-names': 'off',

		// we use tab and prefer to indent inside the `switch`
		// http://eslint.org/docs/rules/indent
		indent: ['error', 'tab', {
			SwitchCase: 1
		}],

		// http://eslint.org/docs/rules/no-tabs
		'no-tabs': 'off',

		// there are some codes such as `new Bunyan.createLogger` cannot pass, so disable it
		// http://eslint.org/docs/rules/new-cap
		'new-cap': 'off',

		// we don't want to remove support of `continue` in loop
		'no-continue': 'off',

		// disable it allow better readability
		'no-lonely-if': 'off',

		// let developers decide when to use bracket to explicitly state the priority of operators
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

		// need to use generator function in koa even if we don't use yield
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
		// we need to import devDependencies in test files
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
		'import/no-extraneous-dependencies': 'off'
	}
};
