const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development", //production if want to minify files
  entry: "./src/index.js",
  watchOptions: {
    aggregateTimeout: 600,
    poll: 1000,
    ignored: /node_modules/,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
    clean: true,
  },
  module: {
    rules: [
      {
        parser: {
          amd: false,
        },
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "/",
            },
          },
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "prod.css",
    }),
    new CleanWebpackPlugin({
      //clean old files before new build
      output: {
        path: path.join(__dirname, "dist"),
      },
    }),
  ],
  devServer: {
    devMiddleware: {
      writeToDisk: true,
    },
    watchFiles: ["src/**/*.js", "css/**/*", "src/**/*.html"],
    static: {
      directory: path.join(__dirname, "dist"),
    },
    liveReload: true,
    port: 5000,
    open: true,
  },

  cache: false,
};
