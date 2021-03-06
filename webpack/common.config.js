const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin'); // eslint-disable-line import/no-extraneous-dependencies
const CopyWebpackPlugin = require('copy-webpack-plugin'); // eslint-disable-line import/no-extraneous-dependencies
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
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              pngquant: {
                quality: '35',
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], { root: path.resolve(__dirname, '..') }),
    new CopyWebpackPlugin([{ from: 'favicons' }, { from: '_redirects' }]),
    new HtmlWebpackPlugin({
      title: 'Ryan O. Mackey',
      template: path.resolve(__dirname, '../src/templates/index.html'),
    }),
  ],
};
