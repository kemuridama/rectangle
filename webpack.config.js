const Webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname + '/src/components',
  entry: {
    loading: './loading.js',
    modal: './modal.js',
    navbar: './navbar.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: 'js/[name].js',
    libraryTarget: 'commonjs'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url-loader'
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader'
      }
    ]
  },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
    'react-modal': 'react-modal',
    'font-awesome': 'font-awesome',
    'normalize.css': 'normalize.css'
  }
};
