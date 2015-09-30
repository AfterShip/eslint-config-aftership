'use strict';

module.exports = {
	extends: [
		'eslint-config-airbnb',
		'eslint-config-aftership/aftership'
	],
	rules: {
		// we want to define multiple components within one file
		// for example, for table.jsx, define header component and footer component in the same file
		'react/no-multi-comp': 0,

		// don't want to check default props
		'react/prop-types': [2, {ignore: ['children']}]
	}
};
