const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin'); // eslint-disable-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin'); // eslint-disable-line import/no-extraneous-dependencies

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['../dist']),
    new HtmlWebpackPlugin({
      title: 'Ryan O. Mackey',
      template: path.resolve(__dirname, '../src/templates/index.html'),
    }),
  ],
};
