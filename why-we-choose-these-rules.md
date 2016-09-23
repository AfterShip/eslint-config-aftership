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
- [Stylistic Issues](#stylistic-issues)
	- [camelcase](#camelcase)
	- [func-names](#func-names)
	- [indent](#indent)
	- [no-tabs](#no-tabs)
	- [new-cap](#new-cap)
	- [no-continue](#no-continue)
	- [no-lonely-if](#no-lonely-if)
	- [no-mixed-operators](#no-mixed-operators)
	- [no-underscore-dangle](#no-underscore-dangle)
	- [object-curly-spacing](#object-curly-spacing)
	- [quote-props](#quote-props)
- [ECMAScript 6](#ecmascript-6)
	- [arrow-body-style](#arrow-body-style)
	- [arrow-parens](#arrow-parens)
	- [object-shorthand](#object-shorthand)
	- [prefer-arrow-callback](#prefer-arrow-callback)
	- [prefer-const](#prefer-const)
	- [prefer-rest-params](#prefer-rest-params)
	- [prefer-template](#prefer-template)
	- [require-yield](#require-yield)
- [Legacy](#legacy)
	- [max-len](#max-len)
- [Other plugins](#other-plugins)
	- [import/newline-after-import](#importnewline-after-import)
	- [import/no-extraneous-dependencies](#importno-extraneous-dependencies)

<!-- /MarkdownTOC -->

## Possible Errors

### comma-dangle
Don't put comma in the last item of object/array
```
'comma-dangle': ['error', 'never']
```
Example: http://eslint.org/docs/rules/comma-dangle

1. It is not a standard ES3 JS code
2. It just looks weird

### no-console
Allow `console`
```
'no-console': 'off'
```
Example: http://eslint.org/docs/rules/no-console

We use it a lot, it is difficult for us to enable this rules

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
'class-methods-use-this': 'off'
```
Example: http://eslint.org/docs/rules/class-methods-use-this

don't force every class methods to use `this`

### no-alert
Allow `alert`
```
'no-alert': 'off'
```
Example: http://eslint.org/docs/rules/no-alert

Front end guys may need it

### no-else-return
No `else` if the `if` condition has `return`
```
'no-else-return': 'off'
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
'no-loop-func': 'off'
```
Example: http://eslint.org/docs/rules/no-loop-func

Disabling it because it breaks our loop function:

```js
for (let results of data) {
	_.forOwn(results, function (value, key) {
		// ......
	});
}
```

### no-new
```
'no-new': 'off'
```
Example: http://eslint.org/docs/rules/no-new

prefer always use new to create class instance for better readability

### no-param-reassign
Allow resign the parameter's value of function
```
'no-param-reassign': 'off'
```
Example: http://eslint.org/docs/rules/no-param-reassign

We prefer `options = options || {}`

### no-script-url
```
'no-script-url': 'off'
```
Example: http://eslint.org/docs/rules/no-script-url

we want to preserve the semantic meaning of link, such as `<a href="javascript:void(0)"></a>`

### no-throw-literal
```
'no-throw-literal': 'off'
```
Example: http://eslint.org/docs/rules/no-throw-literal

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
Only check if local variables (name without `_` prefix) are used
```
'no-unused-vars': [2, {
	args: 'none'
	vars: 'local'
	varsIgnorePattern: '^_'
}]
```
Example: http://eslint.org/docs/rules/no-unused-vars

1. Make sure we clean up our source code, no unnecessary variables
2. We ignore variables with `_` prefix because we have a lot of `_this` for reserve use

### no-use-before-define
```
'no-use-before-define': 'off'
```
Example: http://eslint.org/docs/rules/no-use-before-define

We may need to use the function before we define it, check `js hoisting`

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

1. frontend doesn't have `path` module
2. we don't use `Windows`, we don't care about `Windows`

## Stylistic Issues

### camelcase
Don't check if variables are camel case
```
camelcase: 'off'
```
Example: http://eslint.org/docs/rules/camelcase

We use snake case

### func-names
Don't force to add function name in anonymous function
```
'func-names': 'off'
```
Example: http://eslint.org/docs/rules/func-names

### indent
```
indent: ['error', 'tab', {
	SwitchCase: 1
}]
```
Example: http://eslint.org/docs/rules/indent

We use tab and prefer to indent inside the `switch`

### no-tabs
```
'no-tabs': 'off'
```
Example: http://eslint.org/docs/rules/no-tabs

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

### no-lonely-if
```
'no-lonely-if': 'off'
```
Example: http://eslint.org/docs/rules/no-lonely-if

disable it allow better readability

### no-mixed-operators
```
'no-mixed-operators': 'off'
```
Example: http://eslint.org/docs/rules/no-mixed-operators

let developers decide when to use bracket to explicitly state the priority of operators

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

### prefer-arrow-callback
```
'prefer-arrow-callback': 'off'
```
Example: http://eslint.org/docs/rules/prefer-arrow-callback

### prefer-const
```
'prefer-const': 'off'
```
Example: http://eslint.org/docs/rules/prefer-const

We want to define constant only when it is **REALLY** a constant

### prefer-rest-params
```
'prefer-rest-params': 'off'
```
Example: http://eslint.org/docs/rules/prefer-rest-params

node 4.2 doesn't support rest params yet

### prefer-template
```
'prefer-template': 'off'
```
Example: http://eslint.org/docs/rules/prefer-template

sometime not using template string is more readable

### require-yield
```
'require-yield': 'off'
```
Example: http://eslint.org/docs/rules/require-yield

need to use generator function in koa even if we don't use yield

## Legacy

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
'import/no-extraneous-dependencies': 'off'
```
Example: https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md

we need to import devDependencies in test files
