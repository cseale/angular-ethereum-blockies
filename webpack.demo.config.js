var path = require('path');
var webpack = require('webpack');
var HtmlPlugin = require('html-webpack-plugin');

module.exports = function () {
  return {
    entry: './demo/index.js',
    output: {
      path: path.join(__dirname, 'demo'),
      filename: 'demo.js',
      library: ['angularEthereumidenticon'],
      libraryTarget: 'umd'
    },
    plugins: [
      new HtmlPlugin({
        template: './demo/index.html'
      })
    ],
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
    devServer: {
      contentBase: path.join(__dirname, 'demo'),
      port: 9000,
      historyApiFallback: true,
      inline: true,
      watchOptions: {
        poll: 1000,
        ignored: /node_modules/
      },
      host: '0.0.0.0',
      disableHostCheck: true
    }
  };
};
