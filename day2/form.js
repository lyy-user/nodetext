var http = require("http")
var form = require("formidable")
var path = require("path")
var fs = require("fs")
var cd = require("silly-datetime")


http.createServer((req, res) => {
    if (req.url == "/do") {
        var fm = form.IncomingForm()
      console.log(fm)
        // fields 文本域  files文件域
        fm.uploadDir = "./uploads"
        fm.parse(req, function (err, fields, files) {
            
            var low = files.pic.path
            
            var extname = path.extname(files.pic.name)
            var time = cd.format(new Date(), "YYYYMMDDHHmmss")
            var fanishon = "./uploads/" + time + extname
            
            fs.rename(low, fanishon, (err) => {
                if (err) throw err
            })

            res.end("success")
        })
    }
}).listen(2000)

