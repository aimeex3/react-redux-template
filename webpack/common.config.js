const path = require('path');
const Dotenv = require('dotenv-webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [
    path.resolve(__dirname, '../src/index'),
    path.resolve(__dirname, '../src/styles/index.scss'),
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/static/index.html'),
      favicon: path.resolve(__dirname, '../src/static/images/favicon.ico'),
    }),
    new Dotenv({
      systemvars: true,
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/static/robots.txt' },
        { from: 'src/static/users.json' },
      ],
    }),
  ],
};
