const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const eslint = require('eslint');


module.exports = {
    entry : './index.js',
    output : {
        path:path.resolve(__dirname,'./server/build'),
        filename:'bundle.js'
    } ,
    plugins : [
        new HtmlPlugin({
            filename:'index.html',
            base: __dirname + '/server/build/index.html'
        })
    ]
   
}

