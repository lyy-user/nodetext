var fs = require("fs")
var readStream = fs.createReadStream("./a.txt")
// 探究数据流转过程
readStream.on("data",(chunk)=>{
   length++
   console.log(chunk.toString())
})
readStream.on("ens",()=>{
    console.log(length)
})