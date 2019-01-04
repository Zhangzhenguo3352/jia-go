// 使用 crypto 实现压缩
let crypto = require('crypto');
let str = '234567890';
console.log(crypto.getHashes()) // 打印当前压缩支持哪些 压缩格式，返回数组