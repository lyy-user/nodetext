// 监控日志  readline
var fs = require("fs")
var readline = require("readline")
var readStream = fs.createReadStream("./a.txt")
    // console.log(readline)
// data end line监听日志事件

/*
  data 监听输入数据
  end  完成数据读取
*/

var rl = readline.createInterface({
    input:readStream
})
// 日志执行事件
rl.on("line",(lineDate)=>{
    console.log(lineDate)
    console.log(new Date()+"linenum执行")
})
// 日志读取完成
rl.on("close",()=>{
    console.log("line监听数据完毕")
})
