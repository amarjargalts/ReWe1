const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniiCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    entry: './src/js/app.js',
    output: {
        path: __dirname +  '/dist',
        filename: 'js/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: [MiniiCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        new MiniiCssExtractPlugin({
            filename:"css/[name].css",
            chunkFilename: "css/[id].css"
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}