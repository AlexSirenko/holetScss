'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    
    context: __dirname + '\\development',

    entry: {
        styles: './scss/app.scss'
    },

    output: {
        filename: '[name].js',
        path: __dirname + '\\development\\css'
    },

    watch: NODE_ENV === 'development',

    module: {
        rules: [

            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['raw-loader','sass-loader']
                })
            }


        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css')
        //if you want to pass in options, you can do so:
        //new ExtractTextPlugin({
        //  filename: 'style.css'
        //})
    ]
};