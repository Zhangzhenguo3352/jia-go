// node 中 cwd 和 __dirname 的区别
let path = require('path');

// process.cwd()  // 当前工作目录 是可变的，可以通过process.chdir() 指定
process.chdir('/Users/taoche/'); // 指定目录
console.log(process.cwd()); // 当前工作目录  是可变的

// dirname 只要说要执行的脚本确定了，所有的目录就确定了，不可能改变
// /Users/taoche/Desktop/items/练习/5-http/cwd_and.dirname.js
console.log(path.join(__dirname, 'cwd_and.dirname.js'));

// /Users/taoche/Desktop/items/练习/5-http
console.log(__dirname);