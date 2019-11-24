const express = require('express');
const server = express();
const path = require('path');
const port = 3000;

server.use(express.static("build"));

  server.get('/build',(request,response) => { 
    
    response.sendFile(path.resolve(__dirname,`build/index.html`));

});

server.get('/build/bundle.js',(request,response) => { 
    
    response.sendFile(path.resolve(__dirname,`build/bundle.js`));

}); 




server.listen(port,()=> console.log(`Server started at port ${port}`));









