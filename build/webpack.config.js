/*
 * @Descripttion: 
 * @version: 
 * @Author: zhangxiangyu
 * @Date: 2022-01-21 10:24:43
 * @LastEditors: zhangxiangyu
 * @LastEditTime: 2022-01-21 18:26:41
 */
// webpack.config.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
    mode:'development', // 开发模式
    entry: {
        index: path.resolve(__dirname,'../src/index.js'),
        // header: path.resolve(__dirname,'../src/header.js')
    },    // 入口文件
    output: {
        filename: '[name].[chunkhash:8].js',      // 打包后的文件名称
        path: path.resolve(__dirname,'../dist')  // 打包后的目录
    },

    // plugins: [
    //     new CleanWebpackPlugin(),
    // ],

    module: {
        rules:[
            // {
            //     test:/\.js$/,
            //     use:path.resolve(__dirname,'../lib/drop-console.js')
            // },
            {
                 test: /\.js$/,
                 use:path.resolve(__dirname,'../lib/replace-legal-img.js')
            }
        ],
    },
    
    
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'../public/index.html'),
            filename:'index.html',
            chunks:['index'] // 与入口文件对应的模块名
        }),
        // new HtmlWebpackPlugin({
        //     template:path.resolve(__dirname,'../public/header.html'),
        //     filename:'header.html',
        //     chunks:['header'] // 与入口文件对应的模块名
        // }),  
    ],

    
}

