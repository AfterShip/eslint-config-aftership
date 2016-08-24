'use strict';

const _ = require('lodash');
const path = require('path');

const package_json = require('../package');

function extendConfig(config) {
	config = _.cloneDeep(config);

	if (config.extends) {
		if (!Array.isArray(config.extends)) {
			config.extends = [config.extends];
		}

		const extended_configs = config.extends.map((file_name) => {
			// check if not absolute path
			if (path.resolve(file_name) !== path.normalize(file_name)) {
				const eslint_prefix = 'eslint-config-';
				if (!file_name.startsWith(eslint_prefix)) {
					file_name = eslint_prefix + file_name;
				}

				if (file_name.startsWith(package_json.name)) {
					file_name = file_name.replace(package_json.name, '..');
				}
			}

			const config_to_extend = require(file_name);
			return extendConfig(config_to_extend);
		});

		delete config.extends;

		for (const extended_config of extended_configs.reverse()) {
			for (const section_name of Object.keys(extended_config)) {
				if (_.isPlainObject(extended_config[section_name])) {
					if (config[section_name] === undefined) {
						config[section_name] = {};
					}

					for (const rule_name of Object.keys(extended_config[section_name])) {
						if (config[section_name][rule_name] === undefined) {
							config[section_name][rule_name] = extended_config[section_name][rule_name];
						}
					}
				} else if (Array.isArray(config[section_name])) {
					config[section_name] = config[section_name].concat(extended_config[section_name]);
				} else if (config[section_name] === undefined) {
					config[section_name] = extended_config[section_name];
				}
			}
		}
	}

	return config;
}

module.exports = extendConfig;
