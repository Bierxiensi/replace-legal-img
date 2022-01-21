/*
 * @Descripttion: 
 * @version: 
 * @Author: zhangxiangyu
 * @Date: 2022-01-21 13:40:39
 * @LastEditors: zhangxiangyu
 * @LastEditTime: 2022-01-21 18:21:35
 */
const recast = require("recast");
const https = require("https");
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const generator = require('@babel/generator').default
module.exports = async function(source){
    const ast = parser.parse(source,{ sourceType: 'module'})
    var callback = this.async();
    let count = 0;
    let promiseAll = [];
    traverse(ast,{
        enter(path) { 
            if (path.node.type === "StringLiteral" && /^http[s]{0,1}:\/\/([\w.]+\/?)\S*[png|jpg|image|svg]$/.test(path.node.value)) {
                promiseAll[`${count}`] =  new Promise((resolve, reject) => {
                    https.get(path.node.value ,function(res){
                        if(res.statusCode === 404){
                            path.node.value = 'https://p26-passport.byteacctimg.com/img/mosaic-legacy/3793/3114521287~300x300.image'; 
                            resolve(path.node.value);
                        } else if(res.statusCode === 200){
                            resolve(path.node.value);
                        }
                        console.log(31, res.statusCode)
                    })
                }) 
                count++;
            }
        }
    })
    // console.log(36, promiseAll)
    Promise.all(promiseAll).then((result) => {
        output = generator(ast, {}, source);
        console.log(38, recast.prettyPrint(ast, { tabWidth: 2 }).code, output.code)  
        callback(null, output.code)
    }).catch((error) => {
        console.log(41, error)
    })
    // console.log(44, source)

    // callback(null, source)
    // this.callback(source)
    // return source
}



