var fs = require("fs")
var http = require("http")
http.createServer((req,res)=>{
//    fs.readFile("./1.txt",(err,data)=>{
//        res.end(data)
//    })

//    var a = fs.readFileSync("./1.txt")
//    res.end(a)

//    fs.writeFile("./1.txt","scaccav","utf-8",
//       if(err){
//           throw err;
//       }
//       res.writeHead(200,("content-type":"text/html;charset=utf-8"))
//       res.end("写入成功")
//    )

    //  追加内容 {flag:a} append
    // fs.appendFile("./1.txt","追究内容",(err)=>{
    //     if(err) throw err;
    //     res.end("append success")
    // })

    //   创建文件
    // fs.writeFile("./2.txt","xsacevax",(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end("success")
    // })

    // // 删除文件
    // fs.unlink("./2.txt",(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end("delete")
    // })

    // // 创建目录
    // fs.mkdir("./aa",(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end("success")
    // })

    // // 删除目录
    // fs.rmdir("./aa",(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end("删除目录")
    // })

    // // 判断文件状态
    // fs.stat("./1.txt",(err,status)=>{
    //     console.log(status)
    //     res.end("判断")
    // })

    // // 重命名
    fs.rename("./b.txt","./1.txt",(err)=>{
        if(err){
            throw err
        }
        res.end("change name")
    })

    // 


}).listen(3000)