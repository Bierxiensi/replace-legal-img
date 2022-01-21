/*
 * @Descripttion: 
 * @version: 
 * @Author: zhangxiangyu
 * @Date: 2022-01-21 13:42:14
 * @LastEditors: zhangxiangyu
 * @LastEditTime: 2022-01-21 15:50:08
 */
// 给你一把"螺丝刀"——recast
const recast = require("recast");

// 你的"机器"——一段代码
// 我们使用了很奇怪格式的代码，想测试是否能维持代码结构
const checkUrlList = `[
    "https://d-dev.zhgcloud.com/image/2021/6/2/60b75680287c1.png",
    "https://d-dev.zhgcloud.com/image/2021/6/2/60b73e58b38d0.jpg",
    "https://d-dev.zhgcloud.com/image/2021/6/2/60b75758164c6.png",
    "https://d-dev.zhgcloud.com/image/2021/6/2/60b752cd01b1c.png",
    "https://webpack.docschina.org/site-logo.1fcab817090e78435061.svg"
]`

// 你的"机器"——一段代码
// 我们使用了很奇怪格式的代码，想测试是否能维持代码结构
const code =
  `
  function add(a, b) {
    return a +
      // 有什么奇怪的东西混进来了
      b
  }
  `
// 用螺丝刀解析机器
const ast = recast.parse(checkUrlList);

// ast可以处理很巨大的代码文件
// 但我们现在只需要代码块的第一个body，即add函数
const add  = ast.program.body[0]

console.log(ast)