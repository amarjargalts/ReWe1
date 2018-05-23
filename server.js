// var webpack = require('webpack')
// var server = require('webpack-dev-server')
// var config = require('./webpack.config')

// var compiler = webpack(config);
// var serverConfig = {
//     contentBase: './public'
// }

// new server(compiler, serverConfig).listen(3000, function(err){
//     if(err)
//         console.log(err)
//     console.log('Running at Localhost:3000')
// })


//******************* */
const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('./webpack.config.js');
const options = {
  contentBase: './dist',
  hot: true,
  host: 'localhost'
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(3000, 'localhost', () => {
  console.log('dev server listening on port 3000');
});

//******/
