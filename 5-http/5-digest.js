// 使用 crypto 进行加密
let crypto = require('crypto');
let str = '1234567890';
// 将这个包上没有哪些 加密，以数组的形式展现
console.log('crypto', crypto.getHashes());
// let md5 = crypto.createHash('md5'); // md5 方式
let md5 = crypto.createHash('sha1'); // sha1 方式
md5.update('hello');
md5.update('world');

// digest() 输出 md5 值 
// hex  指定十六进制
// console.log(md5.digest('hex')) // fc5e038d38a57032085441e7fe7010b0

// sha1 输出
console.log(md5.digest('hex')); // 6adfb183a4a2c94a2f92dab5ade762a47889a5a1