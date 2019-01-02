let fs0 = require('fs');

// 读取的文件是 1234567890
let rs = fs0.createReadStream('./1.txt', {
    flags: 'r', // 将对这个文件进行何种操作
    mode: 0o666, // 权限位
    encoding: 'utf8', // 设置编码格式
    start: 3, // 从索引3的位置开始读
    end: 8, // 读到索引8 结束
    highWaterMark: 3 // 设置每一次 读取文件的 数量
});
// 文件开始打开时 触发
rs.on('open', function() {
    console.log('打开');
});

// 单独设置 编码格式
rs.setEncoding('utf8');

// 文件
rs.on('data', function(data) {
    console.log('fs0', data);
    //fs0 <Buffer 31 32 33>
    //fs0 <Buffer 34 35 36>
    //fs0 <Buffer 37 38 39>
    //fs0 <Buffer 30>
});
// 文件读取结束时触发
rs.on('end', function() {
    console.log('结束');
});
// 文件读取错误时触发
rs.on('error', function() {
    console.log('错误');
});