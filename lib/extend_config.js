'use strict';

const _ = require('lodash');
const path = require('path');

const packageJson = require('../package');

function extendConfig(config) {
	config = _.cloneDeep(config);

	if (config.extends) {
		if (!Array.isArray(config.extends)) {
			config.extends = [config.extends];
		}

		const extendedConfigs = config.extends.map((fileName) => {
			// check if not absolute path
			if (path.resolve(fileName) !== path.normalize(fileName)) {
				const eslintPrefix = 'eslint-config-';
				if (!fileName.startsWith(eslintPrefix)) {
					fileName = eslintPrefix + fileName;
				}

				if (fileName.startsWith(packageJson.name)) {
					fileName = fileName.replace(packageJson.name, '..');
				}
			}

			const configToExtend = require(fileName);
			return extendConfig(configToExtend);
		});

		delete config.extends;

		for (const extendedConfig of extendedConfigs.reverse()) {
			for (const sectionName of Object.keys(extendedConfig)) {
				if (_.isPlainObject(extendedConfig[sectionName])) {
					if (config[sectionName] === undefined) {
						config[sectionName] = {};
					}

					for (const ruleName of Object.keys(extendedConfig[sectionName])) {
						if (config[sectionName][ruleName] === undefined) {
							config[sectionName][ruleName] = extendedConfig[sectionName][ruleName];
						}
					}
				} else if (Array.isArray(config[sectionName])) {
					config[sectionName] = config[sectionName].concat(extendedConfig[sectionName]);
				} else if (config[sectionName] === undefined) {
					config[sectionName] = extendedConfig[sectionName];
				}
			}
		}
	}

	return config;
}

module.exports = extendConfig;
