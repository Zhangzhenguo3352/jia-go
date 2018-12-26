// 分配 一个长度为6个字节的Buffer
let buff1 = Buffer.alloc(6);
console.log(buff1) // <Buffer 00 00 00 00 00 00>

// 分配一块没有初始化的内存(这种情况就有可能，出现缓存数据)
let buf2 = Buffer.allocUnsafe(6);
console.log(buf2) // <Buffer 30 62 80 04 01 00>

// 字符串 转 Buffer
let buf3 = Buffer.from('地图');
console.log('buf3', buf3) // buf3 <Buffer e5 9c b0 e5 9b be>

//fill(填充值, 开始填充的开始位置, 填充结束的位置)  给Buffer.alloc(6) 赋值（填充）
let buf4 = Buffer.alloc(6);
console.log('buf4 填充前', buf4) // buf4 填充前 <Buffer 00 00 00 00 00 00>
buf4.fill(3, 1, 3);
console.log('buf4 填充后', buf4) // buf4 填充后 <Buffer 00 03 03 00 00 00>

//将字符串 按指定长度，存入 Buffer 对象里面
let buf5 = Buffer.alloc(6);
// 1 写的字符串  2 填充的开始索引  3 填充的字节长度  4 编码
// 吧 ”振国“ 按 utf8 进行解码变成字节，从0 的位子写，写到第三位，不包含第三位
buf5.write("振国", 0, 3, "utf8");
console.log('buf5', buf5) // buf5 <Buffer e6 8c af 00 00 00
buf5.write("国", 3, 3, 'utf8');
console.log('buf5', buf5); // buf5 <Buffer e6 8c af e6 8c af>
console.log(buf5.toString()); // 振国

// 向指定的索引写入一个整数，也就是说占用一个字节的整数
let buf6 = Buffer.alloc(6);
buf6.writeInt8(0, 0);
buf6.writeInt8(16, 1);
buf6.writeInt8(32, 2);
console.log('buf6', buf6) // buf6 <Buffer 00 10 20 00 00 00>

//Buffer 转成字符串 
let buf7 = Buffer.alloc(6);
buf7.fill('国', 0, 3)
console.log('buf7', buf7) // buf7 <Buffer e5 9b bd 00 00 00>
console.log('buf7 toString', buf7.toString()) // buf7 toString 国

// 分配一个长度 为6 的Buffer 里面每一个值都是 1
let buf8 = Buffer.alloc(6, 1)
console.log('buf8', buf8) // buf8 <Buffer 01 01 01 01 01 01>

// slice(开始位子, 结束位置)  从Buffer 中标截取一段
let buf9 = Buffer.alloc(6, 1);
let buf10 = buf9.slice(2, 6);
console.log('buf10', buf10); // buf10 <Buffer 01 01 01 01>


// string_decoder  它的出现解决了乱码问题
let buf11 = Buffer.from('珠峰培训');
let buf12 = buf11.slice(0, 6);
let buf13 = buf11.slice(0, 5);
console.log('buf12', buf12.toString()); // buf12 珠峰
console.log('buf13', buf13.toString()); // buf13 珠�

let { StringDecoder } = require('string_decoder');
let sd = new StringDecoder();

console.log('sd', sd.write(buf13)); // sd 珠
let buf14 = buf11.slice(5);
console.log('sd', sd.write(buf14)); // sd 峰培训

// concat 连接 Buffer
let buf15 = Buffer.from('珠');
let buf16 = Buffer.from('峰');
let buf17 = Buffer.concat([buf15, buf16]) // buf17 <Buffer e7 8f a0 e5 b3 b0>
console.log('buf17', buf17.toString()) // buf17 珠峰
    // 指定长度连接Buffer
let buf18 = Buffer.concat([buf15, buf16], 5); // buf18 <Buffer e7 8f a0 e5 b3>
console.log('buf18', buf18.toString()); // buf18 珠�

// for ... of ... 循环对象数组
const iterable = new Map([
    ['one', 1],
    ['two', 2]
]);
for (const [key, value] of iterable) {
    console.log(`key: ${key} and Value: ${value}`)
        //key: one and Value: 1
        //key: two and Value: 2
}

// isBuffer 判断这个对象是不是 Buffer
let buf19 = Buffer.from('张');
console.log('buf19', Buffer.isBuffer(buf19)) // buf19 true

// length 获取字节长度
let buf20 = Buffer.byteLength('珠峰');
let buf21 = Buffer.from('珠峰培训');
console.log('buf20', buf20) // 6
console.log('buf21', buf21.length) // 12