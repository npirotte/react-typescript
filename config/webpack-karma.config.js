// file : /config/webpack-karma.config.js
const WebpackConfig = require('webpack-config')

module.exports = new WebpackConfig().merge({
  debug: true,
  devtool: 'inline-source-map',

  module: {
    loaders: [{
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      loaders: ['ts']
    }]
  }
})
