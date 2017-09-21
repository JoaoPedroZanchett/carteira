/*
    ./webpack.config.js
*/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  plugins: [HtmlWebpackPluginConfig],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.(woff|woff2)$/, loader: "url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]" },
      { test: /\.ttf$|\.eot$/, loader: "file-loader?name=fonts/[name].[ext]" },
      { test: /\.svg$|\.png$|\.jpe?g$|\.gif$/, loader: "file-loader?name=images/[name].[ext]" }
    ]
  }
}
