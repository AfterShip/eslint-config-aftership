# Why we choose these rule(s)?

## Table of Contents

<!-- MarkdownTOC autolink=true bracket=round depth=3 style=unordered -->

- [Possible Errors](#possible-errors)
	- [comma-dangle](#comma-dangle)
	- [no-console](#no-console)
- [Best Practices](#best-practices)
	- [no-alert](#no-alert)
	- [no-else-return](#no-else-return)
	- [no-implicit-coercion](#no-implicit-coercion)
	- [no-loop-func](#no-loop-func)
	- [no-param-reassign](#no-param-reassign)
	- [no-unused-expressions](#no-unused-expressions)
	- [vars-on-top](#vars-on-top)
- [Variables](#variables)
	- [no-undef](#no-undef)
	- [no-unused-vars](#no-unused-vars)
	- [no-use-before-define](#no-use-before-define)
- [Stylistic Issues](#stylistic-issues)
	- [camelcase](#camelcase)
	- [func-names](#func-names)
	- [indent](#indent)
	- [new-cap](#new-cap)
	- [object-curly-spacing](#object-curly-spacing)
- [ECMAScript 6](#ecmascript-6)
	- [object-shorthand](#object-shorthand)
	- [prefer-const](#prefer-const)
	- [no-const-assign](#no-const-assign)
	- [no-var](#no-var)
- [Legacy](#legacy)
	- [max-len](#max-len)

<!-- /MarkdownTOC -->

## Possible Errors

### comma-dangle
Don't put comma in the last item of object/array, looks very weird
```
'comma-dangle': [2, 'never']
```
Example: http://eslint.org/docs/rules/comma-dangle

1. It is not a standard ES3 JS code
2. It just looks weird

### no-console
Allow `console`
```
'no-console': 0
```
Example: http://eslint.org/docs/rules/no-console

We use it a lot, it is difficult for us to enable this rules

## Best Practices

### no-alert
Allow `alert`
```
'no-alert': 0
```
Example: http://eslint.org/docs/rules/no-alert

Front end guys may need it

### no-else-return
No `else` if the `if` condition has `return`
```
'no-else-return': 0
```
Example: http://eslint.org/docs/rules/no-else-return

Although `else` after `return` is useless, it shows the relationship between code and improves readability of the code
If we have `else if` condition (without `return`) later, with this rule on, developers will need to read through the codes and find out which part is `else` code and put it back to `else` scope again, which is easy to make mistake

### no-implicit-coercion
Change variable type explicitly using `Boolean`, `Number`, `String`, etc.
```
'no-implicit-coercion': 2
```
Example: http://eslint.org/docs/rules/no-implicit-coercion

We all agree that help improving the readability of code

### no-loop-func
Allow define function inside loop
```
'no-loop-func': 0
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

### no-param-reassign
Allow resign the parameter's value of function
```
'no-param-reassign': 0
```
Example: http://eslint.org/docs/rules/no-param-reassign

We prefer `options = options || {}`

### no-unused-expressions
Disallow expression that is never used
```
'no-unused-expressions': 2
```
Example: http://eslint.org/docs/rules/no-unused-expressions

For clearer code, there are much more better way than doing `a() || (b = c)` or `a || b()`

### vars-on-top
Allow NOT defining variables on the top of function scope
```
'vars-on-top': 0
```
Example: http://eslint.org/docs/rules/vars-on-top

That will be too strict to enable it, plus we are planning to move on to `let` or `const`, which are not validated by this rule

## Variables

### no-undef
```
'no-undef': 2
```
Example: http://eslint.org/docs/rules/no-undef

1. It is important for us to check if the variable is not defined as we are using `strict` mode
2. We usually do not declare global variables, so it is not very painful for us to add the predefined global variables in `.eslintrc`

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
'no-use-before-define': 0
```
Example: http://eslint.org/docs/rules/no-use-before-define

We may need to use the function before we define it, check `js hoisting`

## Stylistic Issues

### camelcase
Don't check if variables are camel case
```
camelcase: 0
```
Example: http://eslint.org/docs/rules/camelcase

We use snake case

### func-names
Don't force to add function name in anonymous function
```
'func-names': 0
```
Example: http://eslint.org/docs/rules/func-names

### indent
```
indent: [2, 'tab', {
	SwitchCase: 1
}]
```
Example: http://eslint.org/docs/rules/indent

We use tab and prefer to indent inside the `switch`

### new-cap
```
'new-cap': 0
```
Example: http://eslint.org/docs/rules/new-cap

There are some codes, such as `new Bunyan.createLogger`, cannot pass, so disable it

### object-curly-spacing
```
'object-curly-spacing': 2
```
Example: http://eslint.org/docs/rules/object-curly-spacing

## ECMAScript 6

### object-shorthand
```
'object-shorthand': 0
```
Example: http://eslint.org/docs/rules/prefer-const

We just leave it to developers, sometime it is clearer to not use the shorthand

### prefer-const
```
'prefer-const': 0
```
Example: http://eslint.org/docs/rules/prefer-const

We want to define constant only when it is **REALLY** a constant

### no-const-assign
```
'no-const-assign': 2
```
Example: http://eslint.org/docs/rules/no-const-assign

Of course

### no-var
```
'no-var': 2
```
Example: http://eslint.org/docs/rules/no-var

We are moving on to `let` and `const`

## Legacy

### max-len
```
'max-len': [2, 200]
```
Example: http://eslint.org/docs/rules/max-len

We all have a large iMac screen, so setting 200 as max length is fair
