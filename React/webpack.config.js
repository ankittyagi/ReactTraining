const path = require('path');
 

var config = {
  context: path.join(__dirname, 'src'),
  entry: [
    './fetch/app.js',
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
};

module.exports = config