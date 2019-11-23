const express = require('express');
const server = express();
const port = 3333;

server.get('./',(request,response) => {
    return response.send(`Server still working!`);
});

server.listen(port,()=> console.log(`Server started at port ${port}`));









