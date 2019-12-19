const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');




const configDev = module.exports = {
    mode:'development',
    entry : ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000','./index.js'],
    output : {
        path:path.resolve(__dirname,'./build'),
        filename:'bundle.js'
    } ,
    plugins : [
        new HtmlPlugin({
            template:'./src/index.html',
            filename:'./index.html',
            hash:true,
            minify:false
        }) ,
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ] , 
    module : {
        rules :[
            {
                test: /(js|jsx)$/,
                exclude:/node_modules/,
                use : {
                    loader :'babel-loader',
                    options : {
                        presets : ['@babel/preset-env','@babel/preset-react',{
                            plugins: [
                                '@babel/plugin-proposal-class-properties'
                              ]
                        }],
                        minified:false,
                        compact:false
                    }
                }
            },

        ]
    }

    
   
}

