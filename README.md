# eslint-config-aftership

AfterShip ESLint config (modified from Airbnb)

## How to install

***Please be noticed that this package is not uploaded to npm yet, the following install guide, is not working yet***

***If you want to try now, install it by `npm install git+ssh://git@github.com:AfterShip/eslint-config-aftership.git`***

### on your repository:
- **If you are `AfterShip` member, `grunt-init-node` already installed it for you**

- If you are not or you want to install in the existing repository:
	1. `npm install --save eslint-config-aftership`

	2. Replace the `^` with `~` in the `package.json` for `eslint-config-aftership`

	3. Create a `.eslintrc` in the project root

		```json
		{
			"extends": "aftership"
		}
		```

	4. Add it to `npm test` so `travis` can test it for us

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

4. For `Sublime Text 3`:
	- Install [Package Control](https://packagecontrol.io/installation)
	- Install `SublimeLinter-contrib-eslint` by `Package Control`
	- Restart `Sublime Text 3`

5. For `PhpStorm`:
	- `Preference` -> `Plugins` -> click `Browse repositories...` -> search `ESLint` -> click `Install plugin`
	- `Preference` -> `Languages & Frameworks` -> `JavaScript` -> `Code Quality Tools` -> `ESLint` -> check `Enable`

## License
Copyright (c) 2015 AfterShip  
Licensed under the MIT license.
