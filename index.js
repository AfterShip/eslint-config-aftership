'use strict';

module.exports = {
	extends: 'eslint-config-airbnb/base',
	parser: null,
	env: {
		// recognize the predefined variables of mocha
		mocha: true
	},
	ecmaFeatures: {
		// not stable and require harmony flag to enable
		arrowFunctions: false,

		// not stable and require harmony flag to enable
		destructuring: false,

		// we use generator, a lot
		generators: true,

		// we haven't used react, yet
		jsx: false,

		// we use require() instead of `import ... from ...`
		modules: false
	},
	rules: {
		/*++++++++++++++++++
		 + Possible Errors +
		 ++++++++++++++++++*/
		// Don't put comma in the last item of object/array
		// http://eslint.org/docs/rules/comma-dangle
		'comma-dangle': [2, 'never'],

		// http://eslint.org/docs/rules/no-console
		'no-console': 0,

		// http://eslint.org/docs/rules/no-empty-character-class
		'no-empty-character-class': 2,

		// http://eslint.org/docs/rules/valid-typeof
		'valid-typeof': 2,

		/*+++++++++++++++++
		 + Best Practices +
		 +++++++++++++++++*/
		// http://eslint.org/docs/rules/no-alert
		'no-alert': 0,

		// http://eslint.org/docs/rules/dot-location
		'dot-location': [2, 'property'],

		// http://eslint.org/docs/rules/no-implicit-coercion
		'no-implicit-coercion': 2,

		// http://eslint.org/docs/rules/no-loop-func
		'no-loop-func': 0,

		// http://eslint.org/docs/rules/no-multi-spaces
		'no-multi-spaces': 2,

		// Allow resign the parameter's value of function
		// http://eslint.org/docs/rules/no-param-reassign
		'no-param-reassign': 0,

		// http://eslint.org/docs/rules/no-unused-expressions
		'no-unused-expressions': 2,

		// http://eslint.org/docs/rules/vars-on-top
		'vars-on-top': 0,

		// http://eslint.org/docs/rules/yoda
		yoda: 2,

		/*++++++++++++++
		 + Strict Mode +
		 ++++++++++++++*/
		// http://eslint.org/docs/rules/strict
		strict: [2, 'global'],

		/*++++++++++++
		 + Variables +
		 ++++++++++++*/
		// http://eslint.org/docs/rules/no-undef
		'no-undef': 2,

		// http://eslint.org/docs/rules/no-unused-vars
		'no-unused-vars': [2, {
			args: 'none',
			vars: 'local',
			varsIgnorePattern: '^_'
		}],

		// we may need to use the function before we define it, check `js hoisting`
		// http://eslint.org/docs/rules/no-use-before-define
		'no-use-before-define': 0,

		/*+++++++++++++++++++
		 + Stylistic Issues +
		 +++++++++++++++++++*/
		// http://eslint.org/docs/rules/array-bracket-spacing
		'array-bracket-spacing': 2,

		// we use snake case
		// http://eslint.org/docs/rules/camelcase
		camelcase: 0,

		// don't force to add function name in anonymous function
		// http://eslint.org/docs/rules/func-names
		'func-names': 0,

		// we use tab and prefer to indent inside the `switch`
		// http://eslint.org/docs/rules/indent
		indent: [2, 'tab', {
			SwitchCase: 1
		}],

		// there are some codes such as `new Bunyan.createLogger` cannot pass, so disable it
		// http://eslint.org/docs/rules/new-cap
		'new-cap': 0,

		// http://eslint.org/docs/rules/new-parens
		'new-parens': 2,

		// http://eslint.org/docs/rules/object-curly-spacing
		'object-curly-spacing': 2,

		// http://eslint.org/docs/rules/operator-linebreak
		'operator-linebreak': [2, 'after'],

		// only quote the property when needed
		// http://eslint.org/docs/rules/quote-props
		'quote-props': [2, 'as-needed'],

		// add space in anonymous function
		// http://eslint.org/docs/rules/space-before-function-paren
		'space-before-function-paren': [2, {
			anonymous: 'always',
			named: 'never'
		}],

		// http://eslint.org/docs/rules/space-in-parens
		'space-in-parens': 2,

		/*+++++++++++++++
		 + ECMAScript 6 +
		 +++++++++++++++*/
		// http://eslint.org/docs/rules/constructor-super
		'constructor-super': 2,

		// http://eslint.org/docs/rules/computed-property-spacing
		'computed-property-spacing': 2,

		// http://eslint.org/docs/rules/generator-star-spacing
		'generator-star-spacing': [2, 'after'],

		// http://eslint.org/docs/rules/prefer-const
		'prefer-const': 0,

		// http://eslint.org/docs/rules/no-const-assign
		'no-const-assign': 2,

		// http://eslint.org/docs/rules/no-var
		'no-var': 2,

		/*+++++++++
		 + Legacy +
		 +++++++++*/
		// http://eslint.org/docs/rules/max-len
		'max-len': [2, 200],

		// http://eslint.org/docs/rules/no-bitwise
		'no-bitwise': 2
	}
};
