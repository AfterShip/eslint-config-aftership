# eslint-config-aftership

AfterShip ESLint config (modified from eslint-config-airbnb)

following [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) commit [89d1e07882cbcab91c3f51be3d58c77342193909](https://github.com/airbnb/javascript/blob/89d1e07882cbcab91c3f51be3d58c77342193909/README.md)

## Why we choose these rule(s)?
See [here](https://github.com/AfterShip/eslint-config-aftership/blob/master/why-we-choose-these-rules.md)

## Versioning

### X.Y.Z

Y for adding rules/options (more strict)

Z for removing rules/options (more loose)

## How to install

### on your repository:
- **If you are `AfterShip` member, `grunt-init-node` already installed it for you**

- If you are not or you want to install in the existing repository:
	1. `npm install --save-dev eslint@1.6.0 eslint-config-aftership`

	2. Keep the `^` in the `package.json` for `eslint-config-aftership`, if the project is still in development. Replace the `^` with `~` if you want to prevent new rules which may brother you in travis.

	3. Create a `.eslintrc` in the project root

		```json
		{
			"extends": "aftership"
		}
		```

		If your repo is using node version `<= 0.10`, `aftership/legacy` will assume you are using ES5 instead of ES6 up

		```json
		{
			"extends": "aftership/legacy"
		}
		```

		If your repo use `React`, you should extends `aftership/react` instead, you also need to `npm install --save-dev babel-eslint eslint-plugin-react`

		```json
		{
			"extends": "aftership/react"
		}
		```

	4. Add it to `npm test` so that  `travis` can test it for us, for example:

		`package.json`:
		```json
		{
			"scripts": {
				"test": "grunt lint"
			}
		}
		```

		`travis.yml`:
		```yml
		install:
		  - npm install -g grunt-cli
		  - npm install
		script:
		  - npm test
		```

### on your editor:
1. If the repository doesn't have `eslint` installed, you can install it as global package
	- `npm install -g eslint@1.6.0 eslint-config-aftership`
	- For users of `aftership/react`, do `npm install -g babel-eslint eslint-plugin-react`
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

5. For `vim`:
	- Install [scrooloose/syntastic](https://github.com/scrooloose/syntastic) by any plugin manager
	- Add the following lines to `.vimrc`

		```
		let g:syntastic_always_populate_loc_list = 1
		let g:syntastic_auto_loc_list = 1
		let g:syntastic_check_on_open = 0
		let g:syntastic_javascript_checkers = ['eslint']

		" load local eslint in the project root
		" https://github.com/mtscout6/syntastic-local-eslint.vim
		let s:eslint_path = system('PATH=$(npm bin):$PATH && which eslint')
		let b:syntastic_javascript_eslint_exec = substitute(s:eslint_path, '^\n*\s*\(.\{-}\)\n*\s*$', '\1', '')
		```

## License
Copyright (c) 2015 AfterShip  
Licensed under the MIT license.
