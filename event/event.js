//事件模块，核心是EventEmitter，用于事件的发布与订阅
var EventEmitter =  require('events').EventEmitter;

var life = new EventEmitter();
//nodejs中如果相同的事件被订阅超过10次就会警告，但是可以设置最大事件订阅事件数来解决这个问题
life.setMaxListeners(11)

//addEventlistener
//订阅事件
life.on('play',function(who){
    console.log('with '+who+' go to the park');
})
life.on('play',function(who){
    console.log('with '+who+' go to the car')
})
life.on('play',function(who){
    console.log('with '+who+' go to the hall')
})
life.on('play',function(who){
    console.log('with '+who+' go to the bus')
})
life.on('play',function(who){
    console.log('with '+who+' go to the bike')
})
life.on('play',function(who){
    console.log('with '+who+' go to the 6')
})
life.on('play',function(who){
    console.log('with '+who+' go to the 7')
})
life.on('play',function(who){
    console.log('with '+who+' go to the 8')
})
life.on('play',function(who){
    console.log('with '+who+' go to the car')
})
life.on('play',function(who){
    console.log('with '+who+' go to the 9')
})
life.on('play',function(who){
    console.log('with '+who+' go to the 10')
})

life.emit('play','kuohao');


//批量移除事件,也可以传参来移除某一类事件
life.removeAllListeners();

//计算监听事件的数量
console.log(life.listeners('play').length);

//也可以通过这个来计算
console.log(EventEmitter.listenerCount(life,'play'));