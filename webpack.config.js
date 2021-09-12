const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "production",
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "dist"),
    // filename: "[name].[contenthash].bundle.js",
    filename: "main.js",
  },
};
