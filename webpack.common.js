const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniiCssExtractPlugin = require('mini-css-extract-plugin')
// const devMode = process.env.NODE_ENV !== 'production'
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
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loader: [MiniiCssExtractPlugin.loader, 'css-loader','sass-loader']
            },
            
        ]
    },
    plugins: [
        new MiniiCssExtractPlugin({
            filename:"css/[name].css",
            chunkFilename: "css/[id].css"
            // filename: devMode ? 'css/[name].css' : 'css/[name].[hash].css',
            // chunkFilename: devMode ? 'css/[id].css' : 'css/[id].[hash].css',
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ]
}