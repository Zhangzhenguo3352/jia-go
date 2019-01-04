let path = require('path');
let str = 'a/b/c/d.jpg';
console.log(path.basename(str)); // d.jpg
console.log(path.basename(str, '.jpg')); // d