// https://webpack.js.org/guides/getting-started#npm-scripts

const path = require('path');

module.exports = {
  entry: './dist/out-tsc/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};