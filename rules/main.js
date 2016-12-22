'use strict';

const _ = require('lodash');

const extendConfig = require('../lib/extend_config');

const airbnb_rules = extendConfig({
	extends: [
		'eslint-config-airbnb'
	]
});

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

		// http://eslint.org/docs/rules/no-prototype-builtins
		'no-prototype-builtins': 'off',

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

		// allow Math.pow because node 4.2/6.9 doesn't support ** operator
		// http://eslint.org/docs/rules/no-restricted-properties
		'no-restricted-properties': (() => {
			const airbnb_rule = _.get(airbnb_rules, 'rules.no-restricted-properties');
			return airbnb_rule.filter((arg) => {
				if (!_.isPlainObject(arg)) return true;

				return !(arg.object === 'Math' && arg.property === 'pow');
			});
		})(),

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

		// http://eslint.org/docs/rules/no-path-concat
		'no-path-concat': 'off',

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

		// allow for-of because we want to do async operation (yield/await) one by one
		// http://eslint.org/docs/rules/no-restricted-syntax
		'no-restricted-syntax': (() => {
			const airbnb_rule = _.get(airbnb_rules, 'rules.no-restricted-syntax');
			return airbnb_rule.filter((arg) => {
				return arg !== 'ForOfStatement';
			});
		})(),

		// http://eslint.org/docs/rules/new-cap
		'new-cap': 'off',

		// http://eslint.org/docs/rules/no-continue
		'no-continue': 'off',

		// http://eslint.org/docs/rules/no-lonely-if
		'no-lonely-if': 'off',

		// http://eslint.org/docs/rules/no-mixed-operators
		'no-mixed-operators': 'off',

		// http://eslint.org/docs/rules/no-plusplus
		'no-plusplus': 'off',

		// http://eslint.org/docs/rules/no-tabs
		'no-tabs': 'off',

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

		// http://eslint.org/docs/rules/arrow-parens
		'arrow-parens': 'off',

		// http://eslint.org/docs/rules/object-shorthand
		'object-shorthand': 'off',

		// http://eslint.org/docs/rules/prefer-arrow-callback
		'prefer-arrow-callback': 'off',

		// http://eslint.org/docs/rules/prefer-const
		'prefer-const': 'off',

		// http://eslint.org/docs/rules/prefer-rest-params
		'prefer-rest-params': 'off',

		// http://eslint.org/docs/rules/prefer-spread
		'prefer-spread': 'off',

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
		// Disable it because it will throw errors when cannot resolve the path (like using resolve.alias in webpack)
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
		'import/extensions': 'off',

		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
		'import/newline-after-import': 'off',

		// we use app-root-path/pkg-dir a lot in backend
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
		'import/no-dynamic-require': 'off',

		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
		'import/no-extraneous-dependencies': 'off',

		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
		'import/prefer-default-export': 'off'
	}
};
