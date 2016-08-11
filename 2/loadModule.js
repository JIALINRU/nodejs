//单次加载
var hello1 = require('./module.js');
hello1.setName('shine');
var hello2 = require('./module.js');
hello2.setName('shine22');
hello1.sayHello();
//加载两次 后面一次会覆盖前面一次

/*同一个模块---生成虚拟内存映像object

module object = hello1
module object = hello2*/