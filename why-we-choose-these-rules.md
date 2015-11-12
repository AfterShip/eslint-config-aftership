# Why we choose these rule(s)?

## Table of Contents

<!-- MarkdownTOC autolink=true bracket=round depth=3 style=ordered -->

1. [Possible Errors](#possible-errors)
	1. [comma-dangle](#comma-dangle)
	2. [no-console](#no-console)
	3. [no-empty-character-class](#no-empty-character-class)
	4. [valid-typeof](#valid-typeof)
2. [Best Practices](#best-practices)
	1. [no-alert](#no-alert)
	2. [no-else-return](#no-else-return)
	3. [dot-location](#dot-location)
	4. [no-implicit-coercion](#no-implicit-coercion)
	5. [no-loop-func](#no-loop-func)
	6. [no-multi-spaces](#no-multi-spaces)
	7. [no-param-reassign](#no-param-reassign)
	8. [no-unused-expressions](#no-unused-expressions)
	9. [vars-on-top](#vars-on-top)
	10. [yoda](#yoda)
3. [Strict Mode](#strict-mode)
	1. [strict](#strict)
4. [Variables](#variables)
	1. [no-undef](#no-undef)
	2. [no-unused-vars](#no-unused-vars)
	3. [no-use-before-define](#no-use-before-define)
5. [Stylistic Issues](#stylistic-issues)
	1. [array-bracket-spacing](#array-bracket-spacing)
	2. [camelcase](#camelcase)
	3. [func-names](#func-names)
	4. [id-length](#id-length)
	5. [indent](#indent)
	6. [new-cap](#new-cap)
	7. [new-parens](#new-parens)
	8. [object-curly-spacing](#object-curly-spacing)
	9. [operator-linebreak](#operator-linebreak)
	10. [space-before-function-paren](#space-before-function-paren)
	11. [space-in-parens](#space-in-parens)
6. [ECMAScript 6](#ecmascript-6)
	1. [constructor-super](#constructor-super)
	2. [computed-property-spacing](#computed-property-spacing)
	3. [generator-star-spacing](#generator-star-spacing)
	4. [prefer-const](#prefer-const)
	5. [no-const-assign](#no-const-assign)
	6. [no-var](#no-var)
7. [Legacy](#legacy)
	1. [max-len](#max-len)
	2. [no-bitwise](#no-bitwise)

<!-- /MarkdownTOC -->

## Possible Errors

### comma-dangle
Don't put comma in the last item of object/array
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

### no-empty-character-class
Don't allow empty `[]` in `RegExp`
```
'no-empty-character-class': 2
```
Example: http://eslint.org/docs/rules/no-empty-character-class

Removing useless expression improves readability

### valid-typeof
Check the `type` name in `typeof` comparison
```
'valid-typeof': 2
```
Example: http://eslint.org/docs/rules/valid-typeof

No reason not to use it, it can prevent possible errors

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

### dot-location
Stick dot `.` with the `property` instead of `object`
```
'dot-location': [2, 'property']
```
Example: http://eslint.org/docs/rules/dot-location

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

### no-multi-spaces
Not allow multiple spaces in code (not string)
```
'no-multi-spaces': 2
```
Example: http://eslint.org/docs/rules/no-multi-spaces

1. Prevent lots of lines of code change
2. Prevent code conflict when merging

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

### yoda
```
yoda: 2
```
Example: http://eslint.org/docs/rules/yoda

Just to standardize our coding style

## Strict Mode

### strict
```
strict: [2, 'global']
```
Example: http://eslint.org/docs/rules/strict

1. Help us to spot possible errors, like undeclared variables
2. Prepare for `modules` in `es7`, as it will force using `strict` mode anyway

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

### array-bracket-spacing
```
'array-bracket-spacing': 2
```
Example: http://eslint.org/docs/rules/array-bracket-spacing

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

### id-length
```
'id-length': 0
```
Example: http://eslint.org/docs/rules/id-length

Too short for jQuery `$` and lodash `_`

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

### new-parens
```
'new-parens': 2
```
Example: http://eslint.org/docs/rules/new-parens

### object-curly-spacing
```
'object-curly-spacing': 2
```
Example: http://eslint.org/docs/rules/object-curly-spacing

### operator-linebreak
```
'operator-linebreak': [2, 'after']
```
Example: http://eslint.org/docs/rules/operator-linebreak

### space-before-function-paren
Add space in anonymous function
```
'space-before-function-paren': [2, {
    anonymous: 'always'
    named: 'never'
}]
```
Example: http://eslint.org/docs/rules/space-before-function-paren

### space-in-parens
```
'space-in-parens': 2
```
Example: http://eslint.org/docs/rules/space-in-parens

## ECMAScript 6

### constructor-super
Only call `super` when the class is inheriting others
```
'constructor-super': 2
```
Example: http://eslint.org/docs/rules/constructor-super

### computed-property-spacing
```
'computed-property-spacing': 2
```
Example: http://eslint.org/docs/rules/computed-property-spacing

### generator-star-spacing
```
'generator-star-spacing': [2, 'after']
```
Example: http://eslint.org/docs/rules/generator-star-spacing

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

### no-bitwise
Disallow usage of bitwise, such as `&`, `|`, `>>`, `>>>`
```
'no-bitwise': 2
```
Example: http://eslint.org/docs/rules/no-bitwise

1. Prevent missing one `&` or `|` in comparison
2. If you really need to use it, just add `'no-bitwise': 0` to `.eslintrc` in that repo
