var express = require("express")
var app = express()
var path = require("path")
// cookie中间件
var cookieParser = require("cookie-parser")
// 让express和cookie建立起联系
app.use(cookieParser())
var static = path.resolve(__dirname,"public")
app.use(express.static(static))
app.get("/",(req,res)=>{
    console.log("首页中获取："+req.cookies)
    res.send({"data":"login中cookie为："+req.cookies})
})
// 设置 setCookie
app.get("/login",(req,res)=>{
    var obj = req.query.username
    // req.cookies.cookiename = obj
    // 设置cookie     maxAge 过期时长     httpOnly  只允许在服务器端修改cookie
    // signed  是否生成签名    domain  域名    secure
    res.cookie("username",obj,{maxAge:90000,httpOnly:true})
    res.send({"data":obj})
    
    console.log(req)
})
// 获取 getCookie
app.get("/list",(req,res)=>{
    // 获取cookie
    console.log("获取"+req.cookies.username)
    res.send
})
app.listen(3000,function(){
    console.log("挂起")
})


