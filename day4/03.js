// 接收get请求传输的数据
var express = require("express")
var app = express()
app.get("/",(req,res)=>{
    console.log(arguments)
    res.send("默认请求")    
})
app.get("/list",(req,res)=>{
    console.log("接收到的参数："+req.query.username)
    res.send({"data":req.query})    
})
app.get("/getid/:id",(req,res)=>{
    console.log(req.params.id)
    res.send("接收到的id："+req.params.id)    
})
app.listen(3000)