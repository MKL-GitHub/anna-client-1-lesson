const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // mode: "production",
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.ts"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  resolve: {
    extensions: [".js", ".ts", ".json"],
    modules: ["node_modules", "src"],
    alias: {
      "@utils": path.resolve(__dirname, "src", "utils"),
      "@i18n": path.resolve(__dirname, "src", "i18n"),
      "@components": path.resolve(__dirname, "src", "components"),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/i,
        use: "ts-loader",
      },
      {
        test: /\.(sc|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      // {
      //   test: /\.(png|svg|jpg|jpeg|gif)$/i,
      //   use: [
      //     {
      //       loader: "url-loader",
      //       options: {
      //         name: "[name].[ext]",
      //         outputPath: "assets/",
      //       },
      //     },
      //   ],
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "index.css",
    }),
  ],
  devtool: "inline-source-map",
  devServer: {
    host: "localhost",
    port: 8095,
    historyApiFallback: true,
    hot: true,
  },
};
