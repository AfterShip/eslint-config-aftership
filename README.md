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
	1. `npm install --save-dev eslint-config-aftership`

	2. Keep the `^` in the `package.json` for `eslint-config-aftership`, if the project is still in development. Replace the `^` with `~` if you want to prevent new rules which may brother you in travis.

	3. Create a `.eslintrc` in the project root (or in `$HOME` as default eslintrc)

		```json
		{
			"extends": "aftership"
		}
		```

	4. Add it to `npm test` so `travis` can test it for us, for example:

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
1. `npm install -g eslint`

2. If the repository doesn't have `eslint-config-aftership` installed, you can install it as global package
	- `npm install -g eslint-config-aftership`

3. if you are using `nvm`, add the following script to `~/.bash_profile` or `~/.zshenv`
	- **(you may need to modify the code a bit to point to your nvm)**

		```bash
		if [[ "$OSTYPE" == "darwin"* ]]; then
			export NVM_DIR="$(brew --prefix nvm)"
		else
			export NVM_DIR="$HOME/.nvm"
		fi
		[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm
		```

	- remove the corresponding `nvm` loading script in `.bashrc` or `.zshrc`

4. For `Atom`:
	- Install in terminal by `apm install linter linter-eslint`
	- `Preference` -> `Packages` -> `linter-eslint` -> check `Use Global ESLint`

5. For `PhpStorm`:
	- `Preference` -> `Plugins` -> click `Browse repositories...` -> search `ESLint` -> click `Install plugin`
	- `Preference` -> `Languages & Frameworks` -> `JavaScript` -> `Code Quality Tools` -> `ESLint` -> check `Enable`

6. For `Sublime Text 3`:
	- Install [Package Control](https://packagecontrol.io/installation)
	- Install `SublimeLinter-contrib-eslint` by `Package Control`
	- Restart `Sublime Text 3`

7. For `vim`:
	- Install [scrooloose/syntastic](https://github.com/scrooloose/syntastic) by any plugin manager
	- Add the following lines to `.vimrc`

		```vimrc
		let g:syntastic_check_on_open = 1
		let g:syntastic_javascript_checkers = ['eslint']
		```

## License
Copyright (c) 2015 AfterShip  
Licensed under the MIT license.
