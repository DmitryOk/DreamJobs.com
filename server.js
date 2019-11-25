const express = require('express');
const server = express();
const path = require('path');
const port = 3333;


const webpack  = require('webpack');
const webpackConfig = require(process.env.WEBPACK_CONFIG ? process.env.WEBPACK_CONFIG : './webpack.config.dev');
const compiler = webpack(webpackConfig);


server.use(require('webpack-dev-middleware')(compiler , {
    noInfo:true , publicPath : webpackConfig.output.publicPath
}));

server.use(require('webpack-hot-middleware')(compiler , {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
}));


server.use(express.static("build"));

server.get('/build',(request,response) => { 
    request.injectRoot();   
    response.sendFile(path.resolve(__dirname,`build/index.html`));
});

server.listen(port,()=> console.log(`Server started at port ${port}`));









