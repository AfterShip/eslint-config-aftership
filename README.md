# eslint-config-aftership

!! NOTE this is for node >= v4 only, if your have a legacy project to maintain, or dont want to bother upgrade to the latest version, please see [v3 branch](https://github.com/AfterShip/eslint-config-aftership/tree/3.x), if you are upgrading to v4, please see [upgrade guide](https://github.com/AfterShip/eslint-config-aftership/blob/4.x/upgrade_guides/v3tov4.md), see all changes in [v4 shiplist](https://github.com/AfterShip/eslint-config-aftership/issues/13)

[![Build Status](https://travis-ci.org/AfterShip/eslint-config-aftership.svg?branch=master)](https://travis-ci.org/AfterShip/eslint-config-aftership)
[![Dependency Status](https://gemnasium.com/AfterShip/eslint-config-aftership.svg)](https://gemnasium.com/AfterShip/eslint-config-aftership)

[![node](https://img.shields.io/node/v/eslint-config-aftership.svg)]()
[![npm](https://img.shields.io/npm/v/eslint-config-aftership.svg)]()
[![npm](https://img.shields.io/npm/dm/eslint-config-aftership.svg)]()
[![npm](https://img.shields.io/npm/l/eslint-config-aftership.svg)]()

AfterShip ESLint config (modified from eslint-config-airbnb)

following [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) commit [2666db559dc0ef41887a1138cff4f59b3879892a](https://github.com/airbnb/javascript/tree/2666db559dc0ef41887a1138cff4f59b3879892a)

## Rules that cannot be checked by ESLint (Backend only)
* Use `snake_case` for files and folders
* Use `camelCase` when naming `functions`
* Use `PascalCase` when naming `class variables`
* Use `snake_case` when naming `variables`

	`const name = 'John';`, `const email_address = 'john@gmail.com';`

* Use `UPPERCASE` when naming `constant variables` but no need for `required module`

	`const USER = 'John';`, `const DEFAULT_EMAIL = 'john@gmail.com';`

* Use `const` for `required module`

	`const fs = require('fs');`

* Use [JSDoc](http://usejsdoc.org/) for documentation. [Guidelines Here](https://github.com/AfterShip/jsdoc)
* When constructing class for `module.exports`, create it as follows:

	```javascript
	'use strict';

	// Declare imports

	// Class
	class Example {
		constructor() {

		}

		exampleFunction1() {

		}

		...
	}

	module.exports = Example;
	```

## Why we choose these ESLint rules?
See [here](https://github.com/AfterShip/eslint-config-aftership/blob/master/why-we-choose-these-rules.md)

## Versioning

### X.Y.Z

X for the eslint major version

Y for adding rules/options (more strict)

Z for removing rules/options (more loose)

## Installation

as we support frontend and backend project at the same time, some framework specific plugins are declared in `optionalDependencies`, so you have install then at the project level.

### on your repository:
- **If you are `AfterShip` member, `grunt-init-node` already installed it for you**

- If you are not or you want to install in the existing repository:
	1. `npm install --save-dev eslint-config-aftership eslint eslint-plugin-import`

	2. Keep the `^` in the `package.json` for `eslint-config-aftership`, if the project is still in development. Replace the `^` with `~` if you want to prevent new rules which may brother you in travis.

	3. Create a `.eslintrc` in the project root

		```json
		{
			"extends": "aftership"
		}
		```

		If your repo is a **React** project using webpack.js, you should extends `aftership/react`, and install additional packages

		```sh
		npm install eslint-plugin-html eslint-plugin-react eslint-plugin-jsx-a11y babel-eslint eslint-import-resolver-webpack
		```

		```json
		{
			"extends": "aftership/react",
			"settings": {
				"import/resolver": {
					"webpack": {
					"config": "webpack.config.js"
				}
			}
		}
		```

		If your repo is a **Vue** project using webpack, you should extends `aftership/vue`, and install additional packages

		```sh
		npm install eslint-plugin-html eslint-plugin-vue@3.3.0 babel-eslint vue-eslint-parser@1.1.0-7 eslint-import-resolver-webpack
		```

		```json
		{
			"extends": "aftership/vue",
			"settings": {
				"import/resolver": {
					"webpack": {
					"config": "webpack.config.js"
				}
			}
		}
		```

	4. Add it to `npm test` so that  `travis` can test it for us, for example:

		`package.json`:
		```json
		{
		  "scripts": {
		    "lint": "eslint --ext .{jsx|vue},.js ."
		  }
		}
		```

		`travis.yml`:
		```yml
		install:
		  - npm install
		script:
		  - npm run lint
		```

### on your editor:
1. If the repository doesn't have `eslint` installed, you can install it as global package
	- `npm install -g eslint-config-aftership`
	- Create a `.eslintrc` in `$HOME`

		```json
		{
			"extends": "aftership"
		}
		```

2. For `Atom`:
	- Install in terminal by `apm install linter linter-eslint`
	- If you want to use global eslint, `Preference` -> `Packages` -> `linter-eslint` -> check `Use Global ESLint`

3. For `PhpStorm`:
	- `Languages & Frameworks` -> `JavaScript` -> choose `ECMAScript 6` for `JavaScript language version`
	- `Preference` -> `Plugins` -> click `Browse repositories...` -> search `ESLint` -> click `Install plugin`
	- `Preference` -> `Languages & Frameworks` -> `JavaScript` -> `Code Quality Tools` -> `ESLint` -> check `Enable`

4. For `Sublime Text 3`:
	- if you are using `nvm`, add the following script to `~/.bash_profile` or `~/.zshenv` (check which shell you are using in **SYSTEM DEFAULT (not the same as terminal default)** by `echo $SHELL`)

		```bash
		if hash brew 2> /dev/null && [[ -d "$(brew --prefix nvm)" ]]; then
			export NVM_DIR="$(brew --prefix nvm)"
		else
			export NVM_DIR="$HOME/.nvm"
		fi

		if [[ -s "$NVM_DIR/nvm.sh" ]]; then
			source "$NVM_DIR/nvm.sh"
		fi
		```

		remove the corresponding `nvm` loading script in `.bashrc` or `.zshrc`

	- Install [Package Control](https://packagecontrol.io/installation)
	- Install `SublimeLinter` and `SublimeLinter-contrib-eslint` by `Package Control`
	- Restart `Sublime Text 3`
	- Restart computer if ESLint is not working

5. For `vim` or `neovim`:
	- `neovim` is preferred over `vim`, as `neovim` can load plugin asynchronously, which highly improve performance when linting with ESLint
	- Install [benekastah/neomake](https://github.com/benekastah/neomake) by any plugin manager, such as [vim-plug](https://github.com/junegunn/vim-plug)
	- Add the following lines to `~/.vimrc` (`vim`) or `~/.config/nvim/init.vim` (`neovim`)

		```
		autocmd BufWrite * :Neomake

		let g:neomake_javascript_enabled_makers= ['eslint']

		" load local eslint in the project root
		" modified from https://github.com/mtscout6/syntastic-local-eslint.vim
		let s:eslint_path = system('PATH=$(npm bin):$PATH && which eslint')
		let g:neomake_javascript_eslint_exe = substitute(s:eslint_path, '^\n*\s*\(.\{-}\)\n*\s*$', '\1', '')
		```

## Known Issues
- NA

## License
Copyright (c) 2017 AfterShip
 
Licensed under the MIT license.
