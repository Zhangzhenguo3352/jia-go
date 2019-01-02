// 当我们调用 data 时候，node 会不停的调用操作系统，那么
// 怎么样才能 让它停下来那
/**
    打开
    234
    --- 下面的 打印是 2秒后打印的
    567
    end
    close
 */
let fs1 = require('fs');
// 读取的文件 内容 是 12345678901
let rs1 = fs1.createReadStream('./1.txt', {
    flags: 'r',
    encoding: 'utf8',
    mode: 0o666,
    start: 1,
    end: 6,
    highWaterMark: 3, // 设置每一次读取文件的 数量
})
rs1.setEncoding('utf8');
rs1.on('open', () => {
    console.log('打开')
});
rs1.on('data', (data) => {
    console.log(data)
    rs1.pause(); // pause 暂停 和 发送 data 事件
    // 等到 2秒之后 才 
    setTimeout(function() {
        // 恢复读取并触发data 事件
        rs1.resume();
    }, 2000);
});
rs1.on('end', () => {
    console.log('end');
});
rs1.on('close', () => {
    console.log('close');
});
rs1.on('error', () => {
    console.log('error');
});