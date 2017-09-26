// var events = require('events');
//
// var eventEmitter = new events.EventEmitter();
//
// var connectHandler = function connected() {
//     console.log('连接成功。');
//     eventEmitter.emit('data_received');
// }
// eventEmitter.on('connection',connectHandler);
// eventEmitter.on('data-received',function () {
//     console.log('数据接收成功。');
// });
// eventEmitter.emit('connection');
// console.log("程序执行完毕。")
var sum = 1000;
var l = 1.035;
for(var i = 0;i<50;i++){
    sum = sum*l;
    sum = sum;
}
console.log(sum);