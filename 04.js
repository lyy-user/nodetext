var queryString = require("querystring");
var obj = queryString.parse(name=tom,sex=man)
// var obj = queryString.stringify({name:"tom",sex:"man"})
// var obj = queryString.escape("name = lvv")
// var obj = queryString.unescape("name%20%3D%20lvv")

console.log(obj)
