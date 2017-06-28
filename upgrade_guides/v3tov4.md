# eslint config aftership upgrade guide

## max-params

```js
// Bad
function func (a, b, c, d, e) {}

// Good
function func (options) {
	const {a, b, c, d, e} = options;
}
```

## max-lines

Just try to seperate your files into some small chunks, extract some common utils

## prefer-consts

```js
// Bad
let a = 1; // this is never going to change

// Good
const a = 1; 
```

## no-path-concat

```js
// Bad
require(__dirname + 'module/name');

// Good
require(path.resolve(__dirname, 'module/name'));
```


## no-param-reassign

```js
// Bad
function func(a) {
	a = a || {};
}

// Good
function func(a = {}) {
	
}

// Bad - mutates the parameter as side effect --> error prune!
function func(a = {}) {
	if (cond) {
		a.b = 'c';
	}
}

// Good
function func(a = {}) {
	const option = Object.assign({
		b: cond ? 'c': 'd'
	}, a);
}
```


## prefer-destructuring

```js
const obj = {a: 1, b: 2, c: 3};

// Bad
const b = obj.b;

// Good
const {b} = obj;

const arr = [1, 2, 3, 4];

// Bad
const a = arr[0];

// Good
const [a] = arr;
```

## prefer-rest-params

```js
// Bad
function func() {
	arguments
	...
}

// Good
function func(...args) {
	
}
```
