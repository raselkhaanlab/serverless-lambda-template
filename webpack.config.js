const path = require("path");
const slsw = require("serverless-webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: slsw.lib.entries,
  target: "node",
  mode: "none",
  externals: [nodeExternals()],
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "./package.json", to: "." },
        { from: "./.env.example", to: "." },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@utils": path.resolve(__dirname, "src/utils"),
      "@config": path.resolve(__dirname, "src/config"),
      "@middlewares": path.resolve(__dirname, "src/middlewares"),
      "@services": path.resolve(__dirname, "src/services"),
    },
  },
  devtool: "source-map",
};
