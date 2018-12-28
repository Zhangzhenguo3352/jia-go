// 创建 目录
let fs0 = require('fs');
// fs0.mkdir('a/b', function(err) {  // 没有父级目录，想要创建自己 b 会导致报错
fs0.mkdir('a', function(err) {
    if (err) {
        // { [Error: EEXIST: file already exists, mkdir 'a'] errno: -17, code: 'EEXIST', syscall: 'mkdir', path: 'a' }
        // 文件已经存在 mkdir 错误
        console.log('fs0创建失败是调用 err', err)
    }
})

// access  判断一个文件 或 目录，是否存在， 存在不走err
let fs1 = require('fs');
// fs1.constants.R_OK   获取权限
fs1.access('a', fs1.constants.R_OK, function(err) {
    if (err) {
        console.log('fs1 err', err)
    }
})

// 递归异步创建目录
// 这个例子前提是没有这个文件的
let fs2 = require('fs');

function mkdirp(dir) {
    let paths = dir.split('/'); // [a,b,c]
    // 这里传了一个 1 是因为 slice(0, 1)  这样就可以 拿到 a 了
    ! function next2(index) {
        // 让递归结束的判断
        // 4 > 3     return 不需要往下做了
        console.log('index', index, 'paths.length', paths)
        if (index > paths.length) return;

        // paths.slice(0, index)   [ 'a' ] 
        let current = paths.slice(0, index).join('/')
        console.log('current', current) // a
            // access 判断一个文件 或 目录是否存在
        fs2.access(current, fs2.constants.R_OK, function(err) {
            // 如果文件不存在, 调用 mkdir 创建， 递归
            console.log('fs2 err', !!err, current, index)
            if (err) {
                // ['a'] 、 ['b']、 ['c']
                // fs2.mkdir(current, 0o666, () => next(index+1))
                fs2.mkdir(current, next2.bind(null, index + 1))
            } else {
                // 文件 或 目录存在 ，索引 加 1 , 
                next2(index + 1)
            }
        })
    }(1)
}
mkdirp('x/w/d/w/c');

// 同步删除一个文件 和 目录
let fs3 = require('fs');

function rmdirp(dir) {
    let files = fs3.readdirSync(dir);
    console.log('x1122222', files) // [ 'w' ]  这个是下一个的
    files.forEach(function(file) {
        let current = dir + '/' + file;
        console.log('current fs3', current) // x/w
        let child = fs3.statSync(current)
        console.log('child 得到一个子路径', child)
            // isDirectory()  当前这个对象是不是一个目录, 是一个目录返回 true
        if (child.isDirectory()) {
            // 是目录，继续递归调用
            rmdirp(current);
        } else {
            // 不是一个目录时，删除掉
            fs3.unlinkSync(current)
        }
    })
    fs3.rmdirSync(dir);
}
// 目录的 结构是   x/w/d/w/c/1.txt
rmdirp('x');