const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/client/index.js',
    output: {
        libraryTarget: 'var',
        library: 'Client',
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
        },

    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },        
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
           }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
            title: "caching", 
        }),

        new MiniCssExtractPlugin({filename: '[name].css'}),
        
        new CopyWebpackPlugin([
            {from:'src/images',to:'images'} 
        ]), 

    ]
}


