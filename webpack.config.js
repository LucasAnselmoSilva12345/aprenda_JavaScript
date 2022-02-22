const path = require('path');

module.exports = {
  entry: './js/script.js',
  output: {
    path: path.resolve(__dirname, './main.js'),
    filename: './main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
};
