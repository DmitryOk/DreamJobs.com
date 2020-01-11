const express = require('express');
const server = express();
const path = require('path');
const port = 3333;
const webpack  = require('webpack');
const webpackConfig = require(process.env.WEBPACK_CONFIG ? process.env.WEBPACK_CONFIG : './webpack.config.dev');
const compiler = webpack(webpackConfig);
const ROOT = require('./const/const');

/*files required to mongo connection*/ 
const MongoClient = require('mongodb').MongoClient;
const MONGO_URI_DATA = require('./const/const');

const uri = `mongodb+srv://${MONGO_URI_DATA.USERNAME}:${MONGO_URI_DATA.PASSWORD}@${MONGO_URI_DATA.CLUSTER_NAME}/test?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true , useUnifiedTopology:true });


server.use(require('webpack-dev-middleware')(compiler , {
    noInfo:true , publicPath : webpackConfig.output.publicPath
}));

server.use(require('webpack-hot-middleware')(compiler , {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
}));


server.use(express.static("build"));

server.get('/',(request,response) => {  
    response.sendFile(path.resolve(__dirname,`build/index.html`));
});

server.get(`/newest`,(req,res)=>{

    (async () => {
        
        try{
            client.connect();
            const docs = await client.db('DreamJob').collection('vacancies').find({Company_name:"567"}).toArray()
             res.send(docs)
             client.close()             
        }
        catch(err){
            throw new Error(err);
        }

    })()
    
})


server.listen(port,()=> console.log(`Server started at port ${port}`));









