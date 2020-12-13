const merge = require('webpack-merge');
const common = require('./common.config');

module.exports = merge.smart(common, {
  mode: 'development',
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  devtool: 'source-map',
});
