
var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app);

/*server listen on 8090. It could be changed to any number */
app.listen(8090);

io.sockets.on('connection', function (socket) {
   //do nothing for this moment.
});

socket.on('connect board',function(data){
    /*inform client that arduino is connected*/
    socket.broadcast.emit('connect board');
});

socket.on('board ready',function(){
     /*inform client that arduino is ready.
       arduino needs time for getting ready.
      */
      socket.broadcast.emit('board ready');
   });

socket.on('temp-report',function(data){
    /*re-transmit temperature data to web client without worrying about data correction.*/
     socket.broadcast.volatile.emit('temp-report',data);
  });
