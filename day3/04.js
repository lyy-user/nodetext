/**
 * 流的类型：四种
 * readable stream 可读流
 * writeable stream 可写了
 * duplex 双工流（可读可写）
 * Transform  转换流
 * 数据的压缩 zip
 * 
 */

var fs = require("fs")
// 压缩模块
var zlib = require("zlib")
var readStream = fs.createReadStream("./a.txt")
var writeStream = fs.createWriteStream("./a.txt.gzip")
// 流支持链式操作  zlib.createGzip()创建压缩包
readStream.pipe(zlib.createGzip()).pipe(writeStream)
