const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/app.jsx',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    resolve: {
        root: path.resolve(__dirname),
        modulesDirectories: ['src', 'node_modules'],
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-2', 'react']
                }
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader',
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Ordning',
            filename: 'index.html'
        }),
        new webpack.ProvidePlugin({
            "React": "react",
        }),
    ],
    devServer: {
        port: 8080,
        historyApiFallback: true
    }
};
