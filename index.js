'use strict';

const _ = require('lodash');
const eslint_config_airbnb = require('eslint-config-airbnb');

// we don't use babel-eslint, no need
delete eslint_config_airbnb.parser;

// we haven't use react, yet
delete eslint_config_airbnb.plugins;
Object.keys(eslint_config_airbnb.rules).forEach(function(key) {
	if (_.startsWith(key, 'react/')) {
		delete eslint_config_airbnb.rules[key];
	}
});

module.exports = _.merge(eslint_config_airbnb, {
	env: {
		// recognize the predefined variables of mocha
		mocha: true
	},
	ecmaFeatures: {
		// not stable and require harmony flag to enable
		arrowFunctions: false,

		// not stable and require harmony flag to enable
		destructuring: false,

		// we use generator, a lot
		generators: true,

		// we use require() instead of `import ... from ...`
		modules: false,

		// we haven't use react, yet
		jsx: false
	},
	rules: {
		strict: [2, 'global'],

		// we may need to use the function before we define it, check `js hoisting`
		'no-use-before-define': 0,

		// I just hate there is a comma in the last item of object/array
		'comma-dangle': [2, 'never'],

		// Must we use `default` in `switch`? I don't think so
		'default-case': 0,

		// Allow resign the parameter's value of function
		'no-param-reassign': 0,

		// we use tab and prefer to indent inside the `switch`
		indent: [2, 'tab', {
			SwitchCase: 1
		}],

		// we use snake case
		camelcase: 0,

		// don't force to add function name in anonymous function
		'func-names': 0,

		// we don't restrict the line length, our iMac is wide enough
		'max-len': 0,

		// only quote the property when needed
		'quote-props': [2, 'as-needed']
	}
});
