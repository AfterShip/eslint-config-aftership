'use strict';

module.exports = {
	env: {
		// recognize the predefined variables of mocha
		mocha: true
	},
	ecmaFeatures: {
		// we use generator, a lot
		generators: true
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

		// http://eslint.org/docs/rules/no-else-return
		'no-else-return': 0,

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

		// we want to preserve the semantic meaning of link, such as `<a href="javascript:void(0)"></a>`
		// http://eslint.org/docs/rules/no-script-url
		'no-script-url': 0,

		// http://eslint.org/docs/rules/no-throw-literal
		'no-throw-literal': 0,

		// syntax of `chai` will throw this error
		// http://eslint.org/docs/rules/no-unused-expressions
		'no-unused-expressions': 0,

		// http://eslint.org/docs/rules/vars-on-top
		'vars-on-top': 0,

		// http://eslint.org/docs/rules/yoda
		yoda: 2,

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

		/*+++++++++++++++
		 + ECMAScript 6 +
		 +++++++++++++++*/
		// http://eslint.org/docs/rules/constructor-super
		'constructor-super': 2,

		// http://eslint.org/docs/rules/generator-star-spacing
		'generator-star-spacing': [2, 'after'],

		// http://eslint.org/docs/rules/object-shorthand
		'object-shorthand': 0,

		// http://eslint.org/docs/rules/prefer-const
		'prefer-const': 0,

		/*+++++++++
		 + Legacy +
		 +++++++++*/
		// http://eslint.org/docs/rules/max-len
		'max-len': [2, 200],

		// http://eslint.org/docs/rules/no-bitwise
		'no-bitwise': 2
	}
};
