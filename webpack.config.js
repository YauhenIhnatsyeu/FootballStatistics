var path = require("path");

module.exports = {
  entry: "./src/js/index.jsx",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public")
  },
  resolve: {
    alias: {
      Utilities: path.resolve(__dirname, "src/js/utils"),
      Components: path.resolve(__dirname, "src/js/components"),
      Panels: path.resolve(__dirname, "src/js/components/panels")
    },
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  },
  devServer: {
    contentBase: [
      __dirname,
      path.join(__dirname, "public")
    ]
  }
};