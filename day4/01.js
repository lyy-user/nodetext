var http = require("http")
var fs = require("fs")
var art = require("art-template")
console.log(art)
http.createServer((req,res)=>{
    if(req.url == "/facvicon.ico"){
        return
    }
    fs.readFile("./static/index.art",(err,data)=>{
        // 获取art-template模板
        var template = data.toString()
        // render 模板 数据
        // 定义数据
        var list = ["tom","jack","rose"]
        var htmlData = art.render(template,{list:list})
        res.end(htmlData)
    })
}).listen(3000)