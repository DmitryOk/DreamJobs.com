const express = require('express');
const server = express();
const path = require('path');
const port = 3333;
const webpack  = require('webpack');
const webpackConfig = require(process.env.WEBPACK_CONFIG ? process.env.WEBPACK_CONFIG : './webpack.config.dev');
const compiler = webpack(webpackConfig);

/*filer required to mongo connection*/ 
const MongoClient = require('mongodb').MongoClient;
const MONGO_URI_DATA = require('./const/const');

const uri = `mongodb+srv://${MONGO_URI_DATA.USERNAME}:${MONGO_URI_DATA.PASSWORD}@${MONGO_URI_DATA.CLUSTER_NAME}/test?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true , useUnifiedTopology:true });

client.connect((err,result) => {
  const collection = client.db("DreamJob").collection("vacancies");
  collection.countDocuments({
      company:'someCompany',
      adress:'some adress',
      salary:'4444'
  }).then(
    console.log(result))
    .then(client.close())
    .catch(new Error(err))  
});


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









