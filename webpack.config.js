var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var OptimizeJsPlugin = require('optimize-js-plugin');

var env = process.env.NODE_ENV || 'development';

module.exports = {
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                

            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {loader: 'react-hot-loader/webpack'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                    
                ]
            }
        ]
    },


}