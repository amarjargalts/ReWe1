const merge = require('webpack-merge')
const common = require('./webpack.common')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = merge(common, {
   mode: 'production',
//    devServer: {
//     contentBase: './dist',
//     port: 3000
//     },
   plugins: [
       new UglifyJsPlugin()
   ]
});