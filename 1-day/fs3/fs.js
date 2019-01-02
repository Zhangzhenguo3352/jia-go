// UTF-8 字节前三位 比 GBK 字节多了三位，  前三位还是固定的
// 根据这个特点 可以做判断，如果 前是哪个字节截取掉，这不就是
// 标准的 GBK 字节了，

// 验证的是 urf-8 字节码是 9位的
// <Buffer ef bb bf e7 8f a0 e5 b3 b0>
let fs0 = require('fs');
fs0.readFile('./1.txt', function(err, data) {
    if (err) {
        console.log('fs0 err', err)
    } else {
        if (data[0] == 0xef && data[1] == 0xbb && data[2] == 0xbf) {
            // <Buffer ef bb bf e7 8f a0 e5 b3 b0>
            data = data.slice(3) // e7 8f a0 e5 b3 b0
            console.log(data.toString()) // 珠峰
        }
        console.log('fs0 dara', data[0] == 0xef)
    }
});

// gbk 转 utf8 , node 本身不支持
// node 本身支持， utf8 Buffer 转字符串（中文字符）
let iconv = require('iconv-lite');
let fs1 = require('fs');
fs1.readFile('./gbk-to-utf8.txt', function(err, data) {
    let str = iconv.decode(data, 'gbk');
    console.log('gbk data', data) // gbk data <Buffer d6 e9 b7 e5>
    console.log('fs1 data', str); // fs1 data 珠峰
})

// write 写入文件
// 先将写入的文件缓存起立，再批量写入文件
let str2 = '珠峰';
let fs2 = require('fs');
fs2.open('./1.txt', 'w', 0o666, function(err, fd) {
    fs2.write(fd, Buffer.from(str2), 0, 3, null, function(err, byteWrite) {
        // 打印了 写入多少个字节 
        console.log('fs2 byteWrite', byteWrite) // fs2 byteWrite 3
            // 这里的 null 就不用手动维护（从第几个地方写）
        fs2.write(fd, Buffer.from(str2), 3, 3, null, () => {
            //关闭文件先把缓存区清空，
            fs2.fsync(fd, () => {
                // 等到缓存文件清空了，再关闭
                fs2.close(fd, () => {
                    console.log('关闭文件完成')
                })
            });
        })
    })
})

// readdir  获取一个目录下面的所有文件或目录
let fs3 = require('fs');
let path = require('path'); // 处理文件目录的文件
// files 这个文件夹下面所有子文件
fs3.readdir('./a', function(err, files) {
    console.log('fs3', files) // fs3 [ 'b', 'c' ]
    files.forEach(file => {
        // path.join() 把两个子路径 拼成一个大路径
        let child = path.join('a', file)
        console.log('fs3 child', child) // fs3 child       a/c
        fs3.stat(child, function(err, stat) {
            console.log('fs3 stat', stat)
        })
    })
})

// truncat  截取文件 , 使文件在我规定的长度
// 本来2.txt 文件数据是 1234567890  ，被截取后   1234
let fs4 = require('fs');
// 4 使这个文件长度是 我规定的长度 4 
fs4.truncate('./2.txt', 4, function() {
    console.log('我规定的4 截取完成')
})

// 同步删除非空 文件 或 目录
let fs5 = require('fs');
let path2 = require('path');

function rmdirFn(dir) {
    let files = fs5.readdirSync(dir);
    files.forEach(file => {
        let fileName = path2.join(dir, file);
        let child = fs5.statSync(fileName);
        if (child.isDirectory()) { // 如果是一个目录
            rmdirFn(fileName);
        } else {
            fs5.unlinkSync(fileName)
        }
    })
    fs5.rmdirSync(dir);

}
// rmdirFn('b');


// 三角形式的方式得到路径
let fs6 = require('fs');
let path3 = require('path');

function preDeep(dir, callback) {
    console.log('fs6 dir', dir)
        //得到这个文件的 所有文件名字
    fs6.readdir(dir, (err, file) => {
        // file   这个文件下面的 子级名字   
        console.log('fs6 file', file) // fs6 [ 'b', 'c' ]
            ! function next2(i) {
                // i 2 => file.length 2
                console.log('i', i, '=> file.length', file.length)
                if (i >= file.length) return callback();
                let child = path3.join(dir, file[i]);
                fs6.stat(child, (err, stat) => {
                    if (stat.isDirectory()) {
                        preDeep(child, () => next2(i + 1))
                    } else {
                        console.log('fs6 child', child)
                        next2(i + 1)
                    }
                });
            }(0)
    })
}
preDeep('a', () => {
    console.log('全部迭代完毕');
})

// watchFile 监控文件的变化的方法
let fs7 = require('fs');
// 1 当前的状态  2 以前的转台对象
fs7.watchFile('3.txt', function(curr, prev) {
    console.log('Date.parse()', Date.parse()) // NaN
    console.log('curr.ctime', curr.ctime) // 1970-01-01T00:00:00.000Z
    console.log('prev.ctime', prev.ctime) // 1970-01-01T00:00:00.000Z
    console.log('Date.parse(curr.ctime)', Date.parse(curr.ctime))
    if (Date.parse(prev.ctime) == 0 && Date.parse(curr.ctime) == 0) {
        console.log('没有这个我就爱你');
    } else if (Date.parse(curr.ctime) != Date.parse(curr.ctime)) {
        console.log('修改')
    } else if (Date.parse(curr.ctime) == 0) {
        console.log('删除 ')
    } else if (Date.parse(prev.ctime) == 0) {
        console.log('创建 ')
    }
})