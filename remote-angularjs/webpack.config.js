const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: "./app/app.module.js",
  output: {
    uniqueName: "mfe2",
    filename: "bundle.js",
    // path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: [".webpack.js", ".js"]
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "angularApp",
      filename: "remoteEntry.js",
      exposes: {
        "./sampleApp": "./app/bootstrap.js", // app.module
        "./sampleModule": "./app/app.module.js", // app.module
        "./sampleComponent": "./app/sample.bootstrap.js", // 
      },
      shared: {
        angular: { singleton: true, eager: true },
      },
    }),
    new HtmlWebPackPlugin({ template: './index.html'})
  ],
  devServer: {
    port: 4350
  }
}