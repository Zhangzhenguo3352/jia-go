let fs = require('fs');

//highWaterMark 的参数意义，当你往可写流写数据的时候，不是立刻
// 写入文件的，而是写入缓冲区，缓存区的大小就是highWaterMark,
// 默认值是 16k, 然后等缓存区满了后 才真正的写入文件中的
let rs = fs.createWriteStream('./2.txt', {
    flags: 'w',
    mode: 0o666,
    start: 0,
    highWaterMark: 3,
})