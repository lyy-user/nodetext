var http = require("http")
var fs = require("fs")
http.createServer((req,res)=>{
    // 普通获取数据的方式
    fs.readFile("./a.txt",(err,data)=>{

        res.end(data)
    })
    // 通过流的方式获取
    var resdStream = fs.createReadStream("./a.txt")   //source
    fs.resdStream
    
}).listen(3000,function(){
    console.log("挂起")
})