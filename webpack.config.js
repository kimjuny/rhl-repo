var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    path.resolve(__dirname, './src/index.jsx'),
  ],
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, './src/index.jsx'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        include: [ path.resolve(__dirname, 'src') ],
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
  ],
  devServer: {
    hot: true,
    port: 3000,
    historyApiFallback: true,
  }
}