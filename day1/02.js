var http = require("http")
var url = require("url")
http.createServer((req,res)=>{
    var result = "http://localhost:3000/?username=123&password=456";
    var obj = url.parse(result,true)
    // console.log(obj)
    var obj = url.format({
        protocol: 'http:',
        slashes: true,
        auth: null,
        host: 'localhost:3000',
        port: '3000',
        hostname: 'localhost',
        hash: null,
        search: '?username=123&password=456',
        query: '?username=123&password=456',
        pathname: '/',
        path: '/?username=123&password=456',
        href: 'http://localhost:3000/?username=123&password=456'
    })
    console.log(obj)
    res.end()


}).listen(3000,function(){
    console.log("链接成功")
})





