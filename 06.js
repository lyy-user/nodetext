/*
1.定义一个路由文件router.js
2.在router中定义三个路由视图
3.在06.js通过路径进行访问路由视图



*/
var http = require("http")
var router = require("./router")
http.createServer((req,res)=>{
    switch(req,res){
        case "/":router.home(req,res);
        break;
        case "/about":router.about(req,res);
        break;
        case "/news":router.news(req,res);
        break;
    }
}).listen(3000)