var config = {
  entry: ["./src/index.js"],
  output: {
    path: __dirname,
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    inline: true,
    port: 8080
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: "babel"
      }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  devServer: {
    contentBase: "./"
  }
};
module.exports = config;
