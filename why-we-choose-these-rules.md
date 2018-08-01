# Why we choose these rule(s)?

## Table of Contents

<!-- MarkdownTOC autolink=true bracket=round depth=3 style=unordered -->

- [Possible Errors](#possible-errors)
	- [comma-dangle](#comma-dangle)
	- [no-console](#no-console)
	- [no-prototype-builtins](#no-prototype-builtins)
	- [valid-typeof](#valid-typeof)
- [Best Practices](#best-practices)
	- [class-methods-use-this](#class-methods-use-this)
	- [no-alert](#no-alert)
	- [no-else-return](#no-else-return)
	- [no-implicit-coercion](#no-implicit-coercion)
	- [no-loop-func](#no-loop-func)
	- [no-new](#no-new)
	- [no-param-reassign](#no-param-reassign)
	- [no-script-url](#no-script-url)
	- [no-throw-literal](#no-throw-literal)
	- [no-unused-expressions](#no-unused-expressions)
	- [vars-on-top](#vars-on-top)
- [Variables](#variables)
	- [no-shadow](#no-shadow)
	- [no-unused-vars](#no-unused-vars)
	- [no-use-before-define](#no-use-before-define)
- [Node.js and CommonJS](#nodejs-and-commonjs)
	- [global-require](#global-require)
	- [no-mixed-requires](#no-mixed-requires)
	- [no-path-concat](#no-path-concat)
- [Style](#style)
	- [camelcase](#camelcase)
	- [func-names](#func-names)
	- [indent](#indent)
	- [new-cap](#new-cap)
	- [no-continue](#no-continue)
	- [no-mixed-operators](#no-mixed-operators)
	- [no-plusplus](#no-plusplus)
	- [no-tabs](#no-tabs)
	- [no-underscore-dangle](#no-underscore-dangle)
	- [object-curly-spacing](#object-curly-spacing)
	- [quote-props](#quote-props)
- [ECMAScript 6](#ecmascript-6)
	- [arrow-body-style](#arrow-body-style)
	- [arrow-parens](#arrow-parens)
	- [object-shorthand](#object-shorthand)
	- [prefer-template](#prefer-template)
	- [require-yield](#require-yield)
	- [max-len](#max-len)
	- [max-lines](#max-lines)
	- [max-params](#max-params)
- [Other plugins](#other-plugins)
	- [import/newline-after-import](#importnewline-after-import)
	- [import/no-extraneous-dependencies](#importno-extraneous-dependencies)
	- [import/prefer-default-export](#importprefer-default-export)

<!-- /MarkdownTOC -->

## Possible Errors

### comma-dangle

in backend projects, always put tailing commas

```
'comma-dangle': ['error', {
	arrays: 'always-multiline',
	objects: 'always-multiline',
	imports: 'always-multiline',
	exports: 'always-multiline',
	functions: 'always-multiline'
}]
```

Example: http://eslint.org/docs/rules/comma-dangle

### no-console
Allow `console`
```
'no-console': 'error'
```
Example: http://eslint.org/docs/rules/no-console

We use it a lot, it is difficult for us to enable this rule

### no-prototype-builtins
```
'no-prototype-builtins': 'off'
```
Example: http://eslint.org/docs/rules/no-prototype-builtins

we never use an object that shadows an Object.prototype method or which does not inherit from Object.prototype

### valid-typeof
```
'valid-typeof': ['error', {
	requireStringLiterals: false
}],
```
Example: http://eslint.org/docs/rules/valid-typeof

if requireStringLiterals is true, it doesn't allow using variable to compare with `typeof another_variable`, which we do it often when creating library

## Best Practices

### class-methods-use-this
```
'class-methods-use-this': 'error'
```
Example: http://eslint.org/docs/rules/class-methods-use-this

Force the instance methods to use `this`, a class method is totally meaningless if it does not use `this`, a utility function will just to the job in such case.

### no-alert
Allow `alert`
```
'no-alert': 'error'
```
Example: http://eslint.org/docs/rules/no-alert

Frontend will never call `alert`

### no-else-return
No `else` if the `if` condition has `return`
```
'no-else-return': 'error'
```
Example: http://eslint.org/docs/rules/no-else-return

Although `else` after `return` is useless, it shows the relationship between code and improves readability of the code
If we have `else if` condition (without `return`) later, with this rule on, developers will need to read through the codes and find out which part is `else` code and put it back to `else` scope again, which is easy to make mistake

### no-implicit-coercion
Change variable type explicitly using `Boolean`, `Number`, `String`, etc.
```
'no-implicit-coercion': 'error'
```
Example: http://eslint.org/docs/rules/no-implicit-coercion

We all agree that help improving the readability of code

### no-loop-func
Allow define function inside loop
```
'no-loop-func': 'error'
```
Example: http://eslint.org/docs/rules/no-loop-func

such loop function should be strongly **discouraged**

```js
for (let results of data) {
	_.each(results, function (value, key) {
		// ......
	});
}
```

### no-new
```
'no-new': 'error'
```
Example: http://eslint.org/docs/rules/no-new

prefer always use new to create class instance for better readability

### no-param-reassign
Allow resign the parameter's value of function
```
'no-param-reassign': ['error', {
	props: true,
	ignorePropertyModificationsFor: [
		'acc', // for reduce accumulators
		'e', // for e.returnvalue
		'ctx', // for Koa routing
		'req', // for Express requests
		'request', // for Express requests
		'res', // for Express responses
		'response', // for Express responses
		'$scope' // for Angular 1 scopes
	]
}]
```
Example: http://eslint.org/docs/rules/no-param-reassign

It's so bad to mutate the parameter, except for koa/express. If possible, always use `func(param = 'default')` to set default parameters

### no-script-url
```
'no-script-url': 'off'
```
Example: http://eslint.org/docs/rules/no-script-url

we want to preserve the semantic meaning of link, such as `<a href="javascript:void(0)"></a>`

### no-throw-literal
```
'no-throw-literal': 'error'
```
Example: http://eslint.org/docs/rules/no-throw-literal

It's generally bad idea because we will lose all of the error stack

### no-unused-expressions
```
'no-unused-expressions': 'off'
```
Example: http://eslint.org/docs/rules/no-unused-expressions

syntax of `chai` will throw error for this rule

### vars-on-top
Allow NOT defining variables on the top of function scope
```
'vars-on-top': 'off'
```
Example: http://eslint.org/docs/rules/vars-on-top

That will be too strict to enable it, plus we are planning to move on to `let` or `const`, which are not validated by this rule

## Variables

### no-shadow
```
'no-shadow': ['error', {
	builtinGlobals: true
}]
```
Example: http://eslint.org/docs/rules/no-shadow

prevents shadowing of built-in global variables

### no-unused-vars
Check all variables that is not used
```
'no-unused-vars': ['error', {
	vars: 'all', 
	args: 'after-used', 
	ignoreRestSiblings: true,
	argsIgnorePattern': '^_.+'
}],
```
Example: http://eslint.org/docs/rules/no-unused-vars

But ignore those started with `_`

### no-use-before-define
```
'no-use-before-define': ['error', {functions: false, classes: true, variables: true}]
```
Example: http://eslint.org/docs/rules/no-use-before-define

## Node.js and CommonJS

### global-require
```
'global-require': 'off'
```
Example: http://eslint.org/docs/rules/global-require

1. backend code needs more dynamic structure
2. frontend need to use require.ensure which need to require inside a function

### no-mixed-requires
```
'no-mixed-requires': 'error'
```
Example: http://eslint.org/docs/rules/no-mixed-requires

to group require together for better readability

### no-path-concat
```
'no-path-concat': 'error'
```
Example: http://eslint.org/docs/rules/no-path-concat

1. frontend dont use path concat
2. in backend always use `path` module

## Style

### camelcase
Don't check if variables are camel case
```
camelcase: 'off'
```
Example: http://eslint.org/docs/rules/camelcase

When giving API responses, sometime we need to use snake_case variables to use object shorthand or object destruction

e.g.

```javascript
ctx.request.body = {
	first_name: 'John',
	first_name: 'Doe',
};

const {first_name, last_name} = req.body;

ctx.body = {
	full_name: `${first_name} ${last_name}`
}
```

For frontend projects, this options is set to 

```
camelcase: 'error'
```

### func-names
It is very annoying sometimes
```
'func-names': 'off'
```
Example: http://eslint.org/docs/rules/func-names

### indent
```
indent: ['error', 'tab', {
	SwitchCase: 1,
	VariableDeclarator: 1,
	outerIIFEBody: 1,
	FunctionDeclaration: {
		parameters: 1,
		body: 1
	},
	FunctionExpression: {
		parameters: 1,
		body: 1
	}
}]
```
Example: http://eslint.org/docs/rules/indent

We use tab and prefer to indent inside the `switch`

We use tab

### new-cap
```
'new-cap': 'off'
```
Example: http://eslint.org/docs/rules/new-cap

There are some codes, such as `new Bunyan.createLogger`, cannot pass, so disable it

### no-continue
```
'no-continue': 'off'
```
Example: http://eslint.org/docs/rules/no-continue

we don't want to remove support of `continue` in loop

### no-mixed-operators
```
'no-mixed-operators': 'off'
```
Example: http://eslint.org/docs/rules/no-mixed-operators

let developers decide when to use bracket to explicitly state the priority of operators

### no-plusplus
```
'no-plusplus': 'off'
```
Example: http://eslint.org/docs/rules/no-plusplus

we use semi colon, so `++` or `--` won't affect us much

### no-tabs
```
'no-tabs': 'off'
```
Example: http://eslint.org/docs/rules/no-tabs

### no-underscore-dangle
```
'no-underscore-dangle': 'off'
```
Example: http://eslint.org/docs/rules/no-underscore-dangle

We use undercore for private variable or function

### object-curly-spacing
```
'object-curly-spacing': ['error', 'never']
```
Example: http://eslint.org/docs/rules/object-curly-spacing

### quote-props
```
'quote-props': 'off'
```
Example: http://eslint.org/docs/rules/quote-props

sometime it is faster to all quote when we copy object from JSON directly

## ECMAScript 6

### arrow-body-style
```
'arrow-body-style': 'off'
```
Example: http://eslint.org/docs/rules/arrow-body-style

should not force developer to remove the scope for arrow function because sometime we do it for clearer code

### arrow-parens
```
'arrow-parens': 'off'
```
Example: http://eslint.org/docs/rules/arrow-parens

let developer decide when to add bracket

### object-shorthand
```
'object-shorthand': 'off'
```
Example: http://eslint.org/docs/rules/object-shorthand

We just leave it to developers, sometime it is clearer to not use the shorthand

### prefer-template
```
'prefer-template': 'off'
```

sometimes it's just better to have `+` to concat strings

### require-yield
```
'require-yield': 'off'
```
Example: http://eslint.org/docs/rules/require-yield

Even in koa, the controller/middleware will most likely have `yield` call

### max-len
```
'max-len': ['error', 200, 2, {
	ignoreUrls: true,
	ignoreComments: false,
	ignoreStrings: true,
	ignoreTemplateLiterals: true
}]
```
Example: http://eslint.org/docs/rules/max-len

We all have a large iMac screen, so setting 200 as max length is fair

### max-lines
```
'max-lines': ['warn', {
	max: 400,
	skipBlankLines: true,
	skipComments: true
}]
```

will display an annoying warning for a file that is way too long, try to separate the logic!

### max-params
```
['warn', 4]
```

a function having more than 5 parameters get break down quickly, try to maintain parameters within 4 parameters

## Other plugins

### import/newline-after-import
```
'import/newline-after-import': 'off'
```
Example: https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md

it breaks a lot of our code because we may group like:
```js
const AftershipError = require('aftership-error');
const AftershipPrivateError = AftershipError.PrivateError;
```

### import/no-extraneous-dependencies
```
'import/no-extraneous-dependencies': ['error', {
	devDependencies: true,
	optionalDependencies: false,
}],
```

We use devDependencies in frontend projects, so will disablet the devDependencies checks

Example: https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md


### import/prefer-default-export
```
'import/prefer-default-export': 'off'
```
Example: https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md

sometime we don't export default because we can foresee we need to export other item in the future
