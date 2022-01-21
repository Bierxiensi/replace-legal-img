/*
 * @Descripttion: 
 * @version: 
 * @Author: zhangxiangyu
 * @Date: 2022-01-21 11:39:38
 * @LastEditors: zhangxiangyu
 * @LastEditTime: 2022-01-21 18:24:57
 */
const recast = require("recast");
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const generator = require('@babel/generator').default
const t = require('@babel/types')
module.exports=function(source){
  const ast = parser.parse(source,{ sourceType: 'module'})
  // console.log(16, ast.program.body[0])
  traverse(ast,{
    CallExpression(path){ 
    // console.log(18, path.node)
    //   if(t.isMemberExpression(path.node.callee) && t.isIdentifier(path.node.callee.object, {name: "console"})){
    //     path.remove()
    //   }
     
    //   if(t.isExpressionStatement(path.node.callee)){
    //      console.log(20, path)
    //   }
    },
    enter(path) { 
        if (path.node.type === "StringLiteral" && /^http[s]{0,1}:\/\/([\w.]+\/?)\S*[png|jpg|image|svg]$/.test(path.node.value)) {
            // var xmlhttp = new ActiveXObject( "Microsoft.XMLHTTP");
            // xmlhttp.open("GET", path.node.value, false);
            // xmlhttp.send();
            // if(xmlhttp.readyState==4) {
            //     if(xmlhttp.Status != 200) {
            //         path.node.value = 'https://webpack.docschina.org/site-logo.1fcab817090e78435061.svg'
            //     }
            // }
            // var ImgObj = new Image(); // 生成一个Image对象
            // ImgObj.src = path.node.value;
            // ImgObj.onload = function (res) { //  图片显示正常  就直接返回 
            // }
            // ImgObj.onerror = function (err) {
            //     path.node.value = 'https://webpack.docschina.org/site-logo.1fcab817090e78435061.svg'; //  图片异常 就返回另一张图片
            // }
            // path.node.value = 'https://p26-passport.byteacctimg.com/img/mosaic-legacy/3793/3114521287~300x300.image'; 
        }
    }
  })

  const output = generator(ast, {}, source);
  console.log(51, recast.prettyPrint(ast, { tabWidth: 2 }).code, output.code)
  return output.code
}
