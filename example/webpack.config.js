const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.resolve('example/index.js'),
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }],
  },
  devServer: {
    stats: 'errors-only',
    historyApiFallback: true,
    publicPath: '/',
    port: 2234,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('example/index.html'),
    }),
  ],
}
