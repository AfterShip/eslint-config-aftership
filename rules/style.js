'use strict';

module.exports = {
	rules: {
		// enforce line breaks after opening and before closing array brackets
		// https://eslint.org/docs/rules/array-bracket-newline
		// NOTE: consider use prettier
		'array-bracket-newline': ['off', 'consistent'],

		// enforce spacing inside array brackets
		// https://eslint.org/docs/rules/array-bracket-newline
		'array-bracket-spacing': ['error', 'never'],

		// enforce line breaks between array elements
		// https://eslint.org/docs/rules/array-element-newline
		// NOTE: consider use prettier
		'array-element-newline': ['off', {multiline: true, minItems: 3}],

		// enforce spacing inside single-line blocks
		// http://eslint.org/docs/rules/block-spacing
		'block-spacing': ['error', 'always'],

		// enforce one true brace style
		'brace-style': ['error', '1tbs', {allowSingleLine: true}],

		// require camel case names
		camelcase: ['off', {properties: 'never', ignoreDestructuring: true}],

		// enforce or disallow capitalization of the first letter of a comment
		// http://eslint.org/docs/rules/capitalized-comments
		'capitalized-comments': ['off', 'never', {
			line: {
				ignorePattern: '.*',
				ignoreInlineComments: true,
				ignoreConsecutiveComments: true,
			},
			block: {
				ignorePattern: '.*',
				ignoreInlineComments: true,
				ignoreConsecutiveComments: true,
			},
		}],

		// in frontend, enable this for better version control
		'comma-dangle': ['error', {
			arrays: 'always-multiline',
			objects: 'always-multiline',
			imports: 'always-multiline',
			exports: 'always-multiline',
			functions: 'always-multiline',
		}],

		// enforce spacing before and after comma
		'comma-spacing': ['error', {before: false, after: true}],

		// enforce one true comma style
		'comma-style': ['error', 'last', {
			exceptions: {
				ArrayExpression: false,
				ArrayPattern: false,
				ArrowFunctionExpression: false,
				CallExpression: false,
				FunctionDeclaration: false,
				FunctionExpression: false,
				ImportDeclaration: false,
				ObjectExpression: false,
				ObjectPattern: false,
				VariableDeclaration: false,
				NewExpression: false,
			},
		}],

		// disallow padding inside computed properties
		'computed-property-spacing': ['error', 'never'],

		// enforces consistent naming when capturing the current execution context
		'consistent-this': 'off',

		// enforce newline at the end of file, with no multiple empty lines
		'eol-last': ['error', 'always'],

		// enforce spacing between functions and their invocations
		// http://eslint.org/docs/rules/func-call-spacing
		'func-call-spacing': ['error', 'never'],

		// requires function names to match the name of the variable or property to which they are
		// assigned
		// http://eslint.org/docs/rules/func-name-matching
		'func-name-matching': ['off', 'always', {
			includeCommonJSModuleExports: false,
		}],

		// require function expressions to have a name
		// http://eslint.org/docs/rules/func-names
		'func-names': 'off',

		// enforces use of function declarations or expressions
		// http://eslint.org/docs/rules/func-style
		'func-style': ['off', 'expression'],

		// enforce consistent line breaks inside function parentheses
		// https://eslint.org/docs/rules/function-paren-newline
		'function-paren-newline': ['error', 'consistent'],

		// Blacklist certain identifiers to prevent them being used
		// http://eslint.org/docs/rules/id-blacklist
		'id-blacklist': 'off',

		// this option enforces minimum and maximum identifier lengths
		// (variable names, property names etc.)
		'id-length': 'off',

		// require identifiers to match the provided regular expression
		'id-match': 'off',

		// Enforce the location of arrow function bodies with implicit returns
		// https://eslint.org/docs/rules/implicit-arrow-linebreak
		'implicit-arrow-linebreak': ['off', 'beside'],

		// this option sets a specific tab width for your code
		// http://eslint.org/docs/rules/indent
		indent: ['error', 'tab', {
			SwitchCase: 1,
			VariableDeclarator: 1,
			outerIIFEBody: 1,
			// MemberExpression: null,
			FunctionDeclaration: {
				parameters: 1,
				body: 1,
			},
			FunctionExpression: {
				parameters: 1,
				body: 1,
			},
			CallExpression: {
				arguments: 1,
			},
			ArrayExpression: 1,
			ObjectExpression: 1,
			ImportDeclaration: 1,
			flatTernaryExpressions: false,
			// list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
			ignoredNodes: [
				'JSXElement',
				'JSXElement > *',
				'JSXAttribute',
				'JSXIdentifier',
				'JSXNamespacedName',
				'JSXMemberExpression',
				'JSXSpreadAttribute',
				'JSXExpressionContainer',
				'JSXOpeningElement',
				'JSXClosingElement',
				'JSXText',
				'JSXEmptyExpression',
				'JSXSpreadChild',
			],
			ignoreComments: false,
		}],

		// specify whether double or single quotes should be used in JSX attributes
		// http://eslint.org/docs/rules/jsx-quotes
		'jsx-quotes': ['off', 'prefer-double'],

		// enforces spacing between keys and values in object literal properties
		'key-spacing': ['error', {beforeColon: false, afterColon: true}],

		// require a space before & after certain keywords
		'keyword-spacing': ['error', {
			before: true,
			after: true,
			overrides: {
				return: {after: true},
				throw: {after: true},
				case: {after: true},
			},
		}],

		// enforce position of line comments
		// http://eslint.org/docs/rules/line-comment-position
		// TODO: enable?
		'line-comment-position': ['off', {
			position: 'above',
			ignorePattern: '',
			applyDefaultPatterns: true,
		}],

		// disallow mixed 'LF' and 'CRLF' as linebreaks
		// http://eslint.org/docs/rules/linebreak-style
		'linebreak-style': ['error', 'unix'],

		// require or disallow an empty line between class members
		// https://eslint.org/docs/rules/lines-between-class-members
		'lines-between-class-members': ['error', 'always', {exceptAfterSingleLine: false}],

		// enforces empty lines around comments
		'lines-around-comment': 'off',

		// require or disallow newlines around directives
		// http://eslint.org/docs/rules/lines-around-directive
		'lines-around-directive': ['error', {
			before: 'always',
			after: 'always',
		}],

		// specify the maximum depth that blocks can be nested
		'max-depth': ['off', 4],

		// specify the maximum length of a line in your program
		// http://eslint.org/docs/rules/max-len
		'max-len': ['error', 200, 2, {
			ignoreUrls: true,
			ignoreComments: false,
			ignoreRegExpLiterals: true,
			ignoreStrings: true,
			ignoreTemplateLiterals: true,
		}],

		// specify the max number of lines in a file
		// http://eslint.org/docs/rules/max-lines
		'max-lines': ['warn', {
			max: 400,
			skipBlankLines: true,
			skipComments: true,
		}],

		// enforce a maximum function length
		// https://eslint.org/docs/rules/max-lines-per-function
		'max-lines-per-function': ['off', {
			max: 50,
			skipBlankLines: true,
			skipComments: true,
			IIFEs: true,
		}],

		// specify the maximum depth callbacks can be nested
		'max-nested-callbacks': ['off', 3],

		// limits the number of parameters that can be used in the function declaration.
		'max-params': ['warn', 4],

		// specify the maximum number of statement allowed in a function
		'max-statements': ['off', 10],

		// restrict the number of statements per line
		// http://eslint.org/docs/rules/max-statements-per-line
		'max-statements-per-line': ['error', {max: 1}],

		// enforce a particular style for multiline comments
		// https://eslint.org/docs/rules/multiline-comment-style
		'multiline-comment-style': ['off', 'starred-block'],

		// require multiline ternary
		// http://eslint.org/docs/rules/multiline-ternary
		// TODO: enable?
		'multiline-ternary': ['off', 'never'],

		// require a capital letter for constructors
		'new-cap': ['off', {
			newIsCap: true,
			newIsCapExceptions: [],
			capIsNew: false,
			capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
		}],

		// disallow the omission of parentheses when invoking a constructor with no arguments
		// http://eslint.org/docs/rules/new-parens
		'new-parens': 'error',

		// allow/disallow an empty newline after var statement
		'newline-after-var': 'off',

		// http://eslint.org/docs/rules/newline-before-return
		'newline-before-return': 'off',

		// enforces new line after each method call in the chain to make it
		// more readable and easy to maintain
		// http://eslint.org/docs/rules/newline-per-chained-call
		'newline-per-chained-call': ['error', {ignoreChainWithDepth: 4}],

		// disallow use of the Array constructor
		'no-array-constructor': 'error',

		// disallow use of bitwise operators
		// http://eslint.org/docs/rules/no-bitwise
		'no-bitwise': 'error',

		// we allow continue calls for loops
		// http://eslint.org/docs/rules/no-continue
		'no-continue': 'off',

		// disallow comments inline after code
		'no-inline-comments': 'off',

		// disallow if as the only statement in an else block
		// http://eslint.org/docs/rules/no-lonely-if
		'no-lonely-if': 'error',

		// disallow un-paren'd mixes of different operators
		// http://eslint.org/docs/rules/no-mixed-operators
		'no-mixed-operators': ['off', {
			groups: [
				['%', '**'],
				['%', '+'],
				['%', '-'],
				['%', '*'],
				['%', '/'],
				['**', '+'],
				['**', '-'],
				['**', '*'],
				['**', '/'],
				['&', '|', '^', '~', '<<', '>>', '>>>'],
				['==', '!=', '===', '!==', '>', '>=', '<', '<='],
				['&&', '||'],
				['in', 'instanceof'],
			],
			allowSamePrecedence: false,
		}],

		// disallow mixed spaces and tabs for indentation
		'no-mixed-spaces-and-tabs': 'error',

		// disallow use of chained assignment expressions
		// http://eslint.org/docs/rules/no-multi-assign
		'no-multi-assign': ['error'],

		// disallow multiple empty lines and only one newline at the end
		'no-multiple-empty-lines': ['error', {max: 2, maxEOF: 1}],

		// disallow negated conditions
		// http://eslint.org/docs/rules/no-negated-condition
		'no-negated-condition': 'off',

		// disallow nested ternary expressions
		'no-nested-ternary': 'error',

		// disallow use of the Object constructor
		'no-new-object': 'error',

		// it's very common to use ++/-- as the increment/decrement in loops
		// http://eslint.org/docs/rules/no-plusplus
		'no-plusplus': 'off',

		// disallow certain syntax forms
		// http://eslint.org/docs/rules/no-restricted-syntax
		'no-restricted-syntax': ['error',
			{
				selector: 'ForInStatement',
				message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
			},
			{
				selector: 'LabeledStatement',
				message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
			},
			{
				selector: 'WithStatement',
				message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
			},
		],

		// disallow space between function identifier and application
		'no-spaced-func': 'error',

		// disallow tab characters entirely
		'no-tabs': 'off',

		// disallow the use of ternary operators
		'no-ternary': 'off',

		// disallow trailing whitespace at the end of lines
		'no-trailing-spaces': ['error', {
			skipBlankLines: false,
			ignoreComments: false,
		}],

		// disallow dangling underscores in identifiers
		'no-underscore-dangle': ['error', {
			allow: [],
			allowAfterThis: false,
			allowAfterSuper: false,
			enforceInMethodNames: false,
		}],

		// disallow the use of Boolean literals in conditional expressions
		// also, prefer `a || b` over `a ? a : b`
		// http://eslint.org/docs/rules/no-unneeded-ternary
		'no-unneeded-ternary': ['error', {defaultAssignment: false}],

		// disallow whitespace before properties
		// http://eslint.org/docs/rules/no-whitespace-before-property
		'no-whitespace-before-property': 'error',

		// enforce the location of single-line statements
		// http://eslint.org/docs/rules/nonblock-statement-body-position
		'nonblock-statement-body-position': ['error', 'beside', {overrides: {}}],

		// require padding inside curly braces
		'object-curly-spacing': ['error', 'never'],

		// enforce line breaks between braces
		// http://eslint.org/docs/rules/object-curly-newline
		// TODO: enable once https://github.com/eslint/eslint/issues/6488 is resolved
		'object-curly-newline': ['error', {
			ObjectExpression: {minProperties: 4, multiline: true, consistent: true},
			ObjectPattern: {minProperties: 4, multiline: true, consistent: true},
			ImportDeclaration: {minProperties: 4, multiline: true, consistent: true},
			ExportDeclaration: {minProperties: 4, multiline: true, consistent: true},
		}],

		// enforce "same line" or "multiple line" on object properties.
		// http://eslint.org/docs/rules/object-property-newline
		'object-property-newline': ['error', {
			allowMultiplePropertiesPerLine: true,
		}],

		// allow just one var statement per function
		'one-var': ['error', 'never'],

		// require a newline around variable declaration
		// http://eslint.org/docs/rules/one-var-declaration-per-line
		'one-var-declaration-per-line': ['error', 'always'],

		// require assignment operator shorthand where possible or prohibit it entirely
		// http://eslint.org/docs/rules/operator-assignment
		'operator-assignment': ['error', 'always'],

		// enforce operators to be placed before or after line breaks
		'operator-linebreak': ['error', 'before', {overrides: {'=': 'none'}}],

		// enforce padding within blocks
		'padded-blocks': ['error', {blocks: 'never', classes: 'never', switches: 'never'}],

		// Require or disallow padding lines between statements
		// https://eslint.org/docs/rules/padding-line-between-statements
		'padding-line-between-statements': 'off',

		// Prefer use of an object spread over Object.assign
		// https://eslint.org/docs/rules/prefer-object-spread
		// TODO: semver-major (eslint 5): enable
		'prefer-object-spread': 'off',

		// require quotes around object literal property names
		// this is not a big deal, sometimes it's more unified if quote all props
		// http://eslint.org/docs/rules/quote-props.html
		'quote-props': ['off', 'as-needed', {keywords: false, unnecessary: true, numbers: false}],

		// specify whether double or single quotes should be used
		quotes: ['error', 'single', {avoidEscape: true}],

		// do not require jsdoc
		// http://eslint.org/docs/rules/require-jsdoc
		'require-jsdoc': 'off',

		// require or disallow use of semicolons instead of ASI
		semi: ['error', 'always'],

		// enforce spacing before and after semicolons
		'semi-spacing': ['error', {before: false, after: true}],

		// Enforce location of semicolons
		// https://eslint.org/docs/rules/semi-style
		'semi-style': ['error', 'last'],

		// requires object keys to be sorted
		'sort-keys': ['off', 'asc', {caseSensitive: false, natural: true}],

		// sort variables within the same declaration block
		'sort-vars': 'off',

		// require or disallow space before blocks
		'space-before-blocks': 'error',

		// require or disallow space before function opening parenthesis
		// http://eslint.org/docs/rules/space-before-function-paren
		'space-before-function-paren': ['error', {
			anonymous: 'always',
			named: 'never',
			asyncArrow: 'always',
		}],

		// require or disallow spaces inside parentheses
		'space-in-parens': ['error', 'never'],

		// require spaces around operators
		'space-infix-ops': 'error',

		// Require or disallow spaces before/after unary operators
		// http://eslint.org/docs/rules/space-unary-ops
		'space-unary-ops': ['error', {
			words: true,
			nonwords: false,
			overrides: {},
		}],

		// require or disallow a space immediately following the // or /* in a comment
		// http://eslint.org/docs/rules/spaced-comment
		'spaced-comment': ['error', 'always', {
			line: {
				exceptions: ['-', '+'],
				markers: ['=', '!'], // space here to support sprockets directives
			},
			block: {
				exceptions: ['-', '+'],
				markers: ['=', '!'], // space here to support sprockets directives
				balanced: true,
			},
		}],

		// Require or disallow spacing between template tags and their literals
		// http://eslint.org/docs/rules/template-tag-spacing
		'template-tag-spacing': ['error', 'never'],

		// require or disallow the Unicode Byte Order Mark
		// http://eslint.org/docs/rules/unicode-bom
		'unicode-bom': ['error', 'never'],

		// require regex literals to be wrapped in parentheses
		'wrap-regex': 'off',
	},
};
