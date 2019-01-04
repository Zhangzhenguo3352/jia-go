// 压缩文件 对 字符串 进行压缩
let zlib = require('zlib');
let str = `hello`;
// 压缩字符串
zlib.gzip(str, (err, buffer) => {
    console.log('buffer', buffer.length); // buffer 25
    // 解压字符串 并读取
    zlib.unzip(buffer, (err, data) => {
        console.log('data', data.toString()); //  data hello
    })
})