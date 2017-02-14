'use strict';
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: './main.jsx',
    output: {
        filename: 'bundle-oilib.js'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!postcss-loader')
            }, {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                loader: 'file'
            }
        ]
    },
     plugins: [
        new ExtractTextPlugin("PageOiDigital.css")

    ],
    postcss: [
        autoprefixer({
            browsers: ['last 2 version']
        })
    ]
};
