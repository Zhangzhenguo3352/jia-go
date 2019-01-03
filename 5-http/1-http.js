// 根据浏览器支持的解压类型，给浏览器压缩的文件

let http = require('http');
let path = require('path');
let url = require('url');
let fs = require('fs');
let { promisify } = require('util');
let mime = require('mime');
let stat = promisify(fs.stat);

let server = http.createServer(request, {
    'encoding': 'utf8'
})

// http://localhost:5000/msg.txt
async function request(req, res) {

    let { pathname } = url.parse(req.url);
    let filename = path.join(__dirname, pathname)
    console.log('mime.getType(filename)', mime.getType(filename))
    try {
        let s = await stat(filename)
        res.setHeader('Content-Type', mime.getType(filename))
        console.log('mime.getType(filename)', mime.getType(filename))
        fs.createReadStream(filename)
            .pipe(res)
    } catch (e) {
        res.statusCode = 404;
        console.log(22)
        res.end('文件不存在');
    }
}
server.listen(5000, function() {
    console.log('服务端已经启动', server.address())
})