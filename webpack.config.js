const webpack = require('webpack');
const path = require('path');

const config = {
    context: __dirname + '/src',
    entry:  './index',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loaders: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    },
    devServer: {
        contentBase: __dirname + '/src',
    },
    devtool: "eval-source-map"
};

if (process.env.NODE_ENV === "production") {
    config.devtool = "source-map";
}

module.exports = config;
