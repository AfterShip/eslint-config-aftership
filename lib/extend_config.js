'use strict';

var _ = require('lodash');

function extendConfig(config) {
	config = _.cloneDeep(config);

	if (config.extends) {
		if (!Array.isArray(config.extends)) {
			config.extends = [config.extends];
		}

		var extended_configs = config.extends.map(function (file_name) {
			var eslint_prefix = 'eslint-config-';
			if (file_name.indexOf(eslint_prefix) !== 0) {
				file_name = eslint_prefix + file_name;
			}
			if (file_name.indexOf('eslint-config-aftership') === 0) {
				file_name = file_name.replace('eslint-config-aftership', '..');
			}

			var config_to_extend = require(file_name);
			return extendConfig(config_to_extend);
		});

		delete config.extends;

		_.forEachRight(extended_configs, function (extended_config) {
			Object.keys(extended_config).forEach(function (section_name) {
				if (_.isPlainObject(extended_config[section_name])) {
					if (config[section_name] === undefined) {
						config[section_name] = {};
					}

					Object.keys(extended_config[section_name]).forEach(function (rule_name) {
						if (config[section_name][rule_name] === undefined) {
							config[section_name][rule_name] = extended_config[section_name][rule_name];
						}
					});
				} else {
					if (config[section_name] === undefined) {
						config[section_name] = extended_config[section_name];
					}
				}
			});
		});
	}

	return config;
}

module.exports = extendConfig;
