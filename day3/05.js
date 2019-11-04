// buffer 二进制数据  缓存区
/**
 * 什么是buffer？
 * 从类型说，就是一个类数组
 * 从内存说，就是开辟的新内存空间
 * 作用：处理二进制数据，解决数据传输过大的问题
 * 案例：文件流  事件流  Tcp
 * 别名：缓存区（等待区）
 * 
 * 什么是二进制数据？ 返回 0和1
 * 创建buffer？ new buffer()已废弃
 * 因为buffer是一个全局对象，所以不需要通过require加载
 * 
 * buffer可以传输的数据类型？
 * string，Buffer，ArrayBuffer,Array, or Array-like Object
 * buffer下面有哪些方法？
 * toJson  toString  slice  contact  length
 * 字节 bit byte
 * 
 * buffer的编码类型？  utf-8  base64  hex  Ascii  unicode
 * 
 * buffer和cache的区别? 
 * buffer相当于临时居住地  cache相当于永久的家
 * 
 * 
 */
// 第一种：buffer.form  把字符串转化为buffer
var buf = Buffer.from("node")
//<Buffer 6e 6f 64 65>
console.log(buf)

// 二。返回一个已初始化的数据，防止生成新的数据包含旧数据
// var buf = Buffer.alloc(10)
// console.log(buf.length)

// 三。不安全 不推荐使用  未被初始化的buffer
// var buf = Buffer.allocUnsafe(10)
// console.log(buf)
