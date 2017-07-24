var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
    
    console.log('a user connected');
    
    socket.on('create notification', function(msg){
        console.log('create notification');
        io.emit('create notification', msg);
    });
    
    socket.on('update notification', function(msg){
        console.log('update notification');
        io.emit('update notification', msg);
    });
    
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
       
});

http.listen(3010, function(){
  console.log('listening on *:3010');
});