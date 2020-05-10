module.exports = {
  mode: "development", // or production
  entry: [
    __dirname + "/app/App.js",
  ],
  output: {
    path: __dirname + "/public",
    filename: "bundle.js",
    publicPath: "/public"
  },
  devServer: {
    port: 8080,
    open: true,
    overlay: {
      warnings: true,
      errors: true
    },
    disableHostCheck: true,
    historyApiFallback: true,
    hot: true
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: [/node_modules/],
      loader: 'babel-loader',
      options: {
        presets: ["@babel/preset-env", "@babel/preset-react"],
        plugins: [
          "@babel/plugin-proposal-class-properties",
          "@babel/plugin-proposal-export-default-from",
          "react-hot-loader/babel",
          "module:jsx-control-statements"
        ]
      }
    }]
  }
}