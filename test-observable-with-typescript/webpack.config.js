// https://webpack.js.org/guides/getting-started#npm-scripts

// TODO: go to see https://github.com/webpack/webpack/tree/master/examples/http2-aggressive-splitting

const path = require('path');

module.exports = {
    mode: 'production',
    entry: './dist/out-tsc/main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
};