// 实现 http
// 通过 获取 请求头里的 Accept-Encoding: gzip, deflate  来知道浏览器支持那种格式
let http = require('http');
let path = require('path');
let url = require('url');
let fs = require('fs');
let mime = require('mime'); // 通过一个文件名称，拿到一个文件类型
let { promisify } = require('util');
//把一个异步方法转成一个返回promisify 的方法
let stat = promisify(fs.stat);

//访问的路径： http://localhost:5000/user/index.html?name=1
let server = http.createServer(request);

// 如果一个方法是异步的 我们就使用 async
async function request(req, res) {

    console.log('req', req.url); //   /user/index.html?name=1
    let { pathname } = url.parse(req.url); // pathname =》  /user/index.html
    //  filepath =》   /Users/taoche/Desktop/items/练习/5-http/user/index.html
    let filepath = path.join(__dirname, pathname); // 改路径 就可以看做，静态文件
    // 如果调用的时候，文件不存在、返回reject 机会走 catch()
    // console.log("filepath", filepath);
    try {

        //使用 ：  http://localhost:5000/msg.txt     这个可以正确的拿到 msg.txt

        // // 如果一个对象返回的是 Promise 那么，前面就使用  await
        let statObj = await stat(filepath);
        // // mime 通过一个文件名称，拿到一个文件类型
        console.log('mime.getType', mime.getType(pathname)); //  text/html
        // // 可以根据不同文件类型，返回不同的Content-type
        res.setHeader('Content-Type', mime.getType(pathname));
        fs.createReadStream(filepath).pipe(res); // 读取 并 在客户端打印

    } catch (e) {
        res.statusCode = 404;
        res.end('您找的文件不存在！', 'utf8');
    }
}

server.listen(5000, function() {
    console.log('服务器启动', server.address())
})