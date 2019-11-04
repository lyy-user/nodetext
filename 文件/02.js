
// node_modules 项目依赖sill
// var time = require("silly-datetime")
// console.log(time)

var sd = require('silly-datetime');

// 2015-07-06 15:10
 console.log(sd.format(new Date(), 'YYYY-MM-DD HH:mm'))
// sd.fromNow(+new Date() - 2000);