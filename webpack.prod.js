const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const options = {};

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new WebpackManifestPlugin(options),
  ]
});