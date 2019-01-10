const merge = require('webpack-merge'); // eslint-disable-line import/no-extraneous-dependencies
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); // eslint-disable-line import/no-extraneous-dependencies
const common = require('./common.config.js');

const prodConfig = merge(common, {
  mode: 'production',
});

if (process.env.ANALYZE_BUNDLE === 'true') {
  prodConfig.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = prodConfig;
