// readFile 异步读取文件
let fs1 = require('fs');
// { encoding: 'utf8' } 默认 带 encoding
fs1.readFile('./1.txt', 'utf8', function(err, data) {
    if (err) {
        console.log(err)
    } else {
        // fs1Data 1234567890 珠峰
        console.log('fs1Data', data)
    }
})

// readFile 使用 toString() 转成字符串
let fs2 = require('fs');
fs2.readFile('./1.txt', function(err, data) {
    if (err) {
        console.log(err);
    } else {
        // fs2Data 1234567890 珠峰
        console.log('fs2Data', data.toString())
    }
})


// // flag 你将要对这个文件进行何种操作
// let fs3 = require('fs');
// fs3.readFile('./2.txt', { encoding: 'utf8', flag: 'w' }, function(err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('fs3Data', data)
//     }
// })

// writeFile() 异步写入文件
// a 追加并写入
let fs4 = require('fs');
fs4.writeFile('./3.txt', '123456789 =》', { encoding: 'utf8', flag: 'a' }, function(err) {
    if (err) { // 如果写入失败
        console.log(err)
    }
});
//appendFile 和上面的例子是一个意思，只不过省略了一些东西
let fs5 = require('fs');
fs5.appendFile('./4.txt', '123456789 =》', function(err) {
    if (err) { // 如果写入失败
        console.log(err)
    }
})


// 标准输出（相同）
console.log('hello')
process.stdout.write('hello');

//错误输出（相同）
console.error('err');
process.stderr.write('err\n');


// open 大文件指定读取  设置字节长度（可选择）
// 1.txt 文件中 写的是  "1234567890 珠峰"
// r 读取
// 0o666 可读可写可执行（默认）
let fs6 = require('fs');
// fs6.readFile('./4.txt', 'utf8', function(err, fd) {
fs6.open('./4.txt', 'r', 0o666, function(err, fd) {
    console.log('   -fd2-----') //    -fd2-----
    let buff = Buffer.alloc(14);
    // 0  14  0
    // 1 开始写入的索引  2 从文件读取几个字节   3 文件的读取位置
    fs6.read(fd, buff, 0, 14, 0, function(err, bytesRead, buffer) {
        console.log('fs6', buff.toString()); // fs6 123456789 =》
    })
})


// 读取文件 和 写入文件
let fs7 = require('fs');
// w 写入文件，不存在则创建，存在则清空后写入
fs7.open('./2.txt', 'w', 0o666, function(err, fd) {
    // fd 文件描述符
    // offset 第三个参数  3  从Buffer 的第几个资源开始读
    // length 第四个参数  4  读几个字节
    // position 第五个参数  0  写入的位置
    fs7.write(fd, Buffer.from('珠峰'), 0, 6, 0, function(err, bytesWrite) {
        console.log('bytesWrite', bytesWrite)
    })
})


// 为了节约内存的拷贝，读一点写一点
// w 写入文件，不存在则创建，存在则清空后写入
let fs8 = require('fs');
const BUFFER_SIZE = 3; // 缓存大小为 3
function copy(src, target) {
    fs8.open(src, 'r', 0o666, function(err, readFile) {
        // w 清空并写入
        fs8.open(target, 'w', 0o666, function(err, writeFile) {
            console.log('writeFile22', writeFile)
            let buff = Buffer.alloc(BUFFER_SIZE);
            ! function next() {
                fs8.read(readFile, buff, 0, BUFFER_SIZE, null, function(err, byteRead, buffer) {
                    // 读取的有数据
                    if (byteRead > 0) {
                        //byteRead 读几个写几个
                        // writeFile 文件描述符
                        fs8.write(writeFile, buff, 0, byteRead, null, next)
                    }
                });
            }()
        })
    })
}
copy('./1.txt', './3.txt');


// write() 写入文件
let fs9 = require('fs');
fs9.open('./2.txt', 'w', 0o666, function(err, fdx) {
    fs9.write(fdx, Buffer.from('珠峰'), 0, 1, null, function(err, byteWrite) {
        console.log('fs9 写入文件的数量', byteWrite);
        // fs9.fsync 强行的把缓存区的数据写入文件，并且关闭
        fs9.fsync(fdx, function(err) {
            // 关闭文件 (打开这个会报错)
            // fs9.close(function() {
            //     console.log('fs9 关闭')
            // });
        })
    })
})