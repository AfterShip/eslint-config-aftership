# eslint-config-aftership

AfterShip ESLint config (modified from Airbnb)

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
	
	2. for users of `aftership/react`, do `npm install --save-dev babel-eslint eslint-plugin-react` too

	3. Keep the `^` in the `package.json` for `eslint-config-aftership`, if the project is still in development. Replace the `^` with `~` if you want to prevent new rules which may brother you in travis.

	4. Create a `.eslintrc` in the project root

		```json
		{
			"extends": "aftership"
		}
		```

		If your repo is using node version `<= 0.10`, you should disable `no-var`

		```json
		{
			"extends": "aftership",
			"rules": {
				"no-var": 0
			}
		}
		```

		If your repo use `React`, you should extends `aftership/react` instead, you will need to `npm install --save-dev babel-eslint eslint-plugin-react` too

		```json
		{
			"extends": "aftership/react"
		}
		```

	5. Add it to `npm test` so `travis` can test it for us, for example:

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
	- for users of `aftership/react`, do `npm install -g babel-eslint eslint-plugin-react` too
	- Create a `.eslintrc` in `$HOME`

		```json
		{
			"extends": "aftership"
		}
		```

2. For `Atom`:
	- Install in terminal by `apm install linter linter-eslint`
	- If you wish to use global eslint, `Preference` -> `Packages` -> `linter-eslint` -> check `Use Global ESLint`

3. For `PhpStorm`:
	- `Preference` -> `Plugins` -> click `Browse repositories...` -> search `ESLint` -> click `Install plugin`
	- `Preference` -> `Languages & Frameworks` -> `JavaScript` -> `Code Quality Tools` -> `ESLint` -> check `Enable`

4. For `Sublime Text 3`:
	- if you are using `nvm`, add the following script to `~/.bash_profile` or `~/.zshenv`

		**(you may need to modify the code a bit to point to your nvm)**

		```bash
		if [[ "$OSTYPE" == "darwin"* ]]; then
			export NVM_DIR="$(brew --prefix nvm)"
		else
			export NVM_DIR="$HOME/.nvm"
		fi
		[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm
		```

		remove the corresponding `nvm` loading script in `.bashrc` or `.zshrc`

	- Install [Package Control](https://packagecontrol.io/installation)
	- Install `SublimeLinter` and `SublimeLinter-contrib-eslint` by `Package Control`
	- Restart `Sublime Text 3`

5. For `vim`:
	- Install [scrooloose/syntastic](https://github.com/scrooloose/syntastic) by any plugin manager
	- Add the following lines to `.vimrc`

		```vimrc
		let g:syntastic_always_populate_loc_list = 1
		let g:syntastic_auto_loc_list = 1
		let g:syntastic_check_on_open = 0
		let g:syntastic_javascript_checkers = ['eslint']
		```

## License
Copyright (c) 2015 AfterShip  
Licensed under the MIT license.
