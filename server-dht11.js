var SerialPort = require("serialport"),
portName ='/dev/ttyUSB0',
sp=null,
io=require('socket.io-client'),
socketHost='192.168.1.3',
socketPort='8090';

delay(1000);

socket = io.connect(socketHost+":"+socketPort);

socket.on('connect',function(){
    sp = new SerialPort.SerialPort(portName, { baudRate: 115200 });
    
   sp.on('open',function(){
      console.log('boad ready');
    });

   sp.on('data',function(data){
      console.log(data.toString());
      socket.emit('temp-report',data.toString());
    });

   
});


/************     Utilities ***************************/
function delay(ms){
  ms += +new Date();
  while (+new Date() < ms) { }
}
/**************************************************/
