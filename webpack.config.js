var webpack = require("webpack");

module.exports = {
    entry: __dirname + "/src/index.js",
    output: {
        path: __dirname + "/dist/assets",
        filename: "bundle.js",
        publicPath: "assets"
    },
    devServer: {
        inline: true,
        contentBase: __dirname + "/dist",
        port: 3000
    },

    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          loader: "babel-loader",
          query: {
            presets: ["latest", "stage-0", "react"]
          }
        }
      ]
    }
    // module: {
    //     rules: [{
    //         test: /\.js$/,
    //         loader: ["babel-loader"],
    //     }]
    // }
}