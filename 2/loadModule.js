//单次加载
var hello1 = require('./module.js');
hello1.setName('shine');
var hello2 = require('./module.js');
hello2.setName('shine22');
hello1.sayHello();