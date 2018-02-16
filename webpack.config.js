var path = require('path');
var webpack = require('webpack');

module.exports = function (env) {
  var PROD = env && env.prod;

  return {
    devtool: PROD && 'source-map',
    entry: './index.js',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: PROD ? 'angularjs-identicon.min.js' : 'angularjs-identicon.js',
      library: ['angularEthereumidenticon'],
      libraryTarget: 'umd'
    },
    plugins: PROD ? [
      new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false },
        sourceMap: true
      })
    ] : [],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        }
      ]
    },
    externals: {
      angular: 'angular'
    }
  };
};