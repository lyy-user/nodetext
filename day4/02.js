var express = require("express")
var app = express()
app.get("/",(req,res)=>{
    console.log(arguments)
    res.send({"success":"get请求成功","data":[{"name":"tom"}]})    
})
// app.post("/list",(req,res)=>{
//     res.send({"success":"post请求成功","data":[{"name":"rose"}]})    
// })
// all代表的所有
// 什么情况下会使用？控制全局的功能时会使用
// app.all("/",(req,res)=>{
//     res.send({"data":"请求成功"})    
// })
app.listen(3000)