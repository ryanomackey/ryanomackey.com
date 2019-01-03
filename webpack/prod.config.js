const merge = require('webpack-merge'); // eslint-disable-line import/no-extraneous-dependencies
const common = require('./common.config.js');

module.exports = merge(common, {
  mode: 'production',
});
