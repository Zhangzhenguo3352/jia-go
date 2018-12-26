// nextTick 把我这个函数放在 栈最后执行
function next() {
    console.log(1);          // 1
    setTimeout(function() {  
        console.log(2)        // 5
    },0)
    process.nextTick(function() {
        console.log(3)         // 2
        process.nextTick(function() {
            console.log(4)     // 3
            process.nextTick(function() {
                console.log(5)  // 4
            })
        })
    })
}
next() 
/** 
    1
    3
    4
    5
    2
 * */ 