const path = require('path');

module.exports = {
  entry: './main.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env", "@babel/preset-react"] }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
};
