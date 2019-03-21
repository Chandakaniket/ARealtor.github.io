$(document).ready(function(){
    var socket = io();
    $(document).on('click', '#send', function(e){
        e.preventDefault(); // prevents page reloading
        socket.emit('getEmployee');
        return false;
    });
    socket.on('upload', function(response){
      var msg = response.data;
      console.log("msg: "+msg);
      
    });
});