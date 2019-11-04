// 接收post传输的数据
// 中间件
var express = require("express")
var bodyparser = require("body-parser")
var app = express()
// 使用中间件
app.use(bodyparser.json())
// 处理字符串
app.use(bodyparser.urlencoded({extended:false}))
app.get("/",(req,res)=>{
    res.send("首页")
})
app.post("/dopost",(req,res)=>{
    console.log(req.body)
    res.send({"data":"接收到post数据为："+req.body.username})
})
app.listen(3000)