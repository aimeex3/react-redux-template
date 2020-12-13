const merge = require('webpack-merge');
const common = require('./common.config');

module.exports = merge.smart(common, {
  mode: 'production',
});
