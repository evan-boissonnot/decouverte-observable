const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// https://webpack.js.org/guides/getting-started#npm-scripts

// TODO: go to see https://github.com/webpack/webpack/tree/master/examples/http2-aggressive-splitting

module.exports = {
    mode: 'development',
    entry: './dist/out-tsc/main.js',
    watch: true,
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({  // Also generate a test.html
            filename: 'index.html',
            template: 'src/index.html'
        })
    ]
};