const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/zawgyi-keyboard.js',
  output: {
    filename: 'zawgyi-keyboard.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
