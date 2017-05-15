var express = require("express");
var config = require("./server/configure");
var app = express();
var mongoose = require("mongoose");

app.set("port",process.env.PORT || 3000);
app.set("views",__dirname + "/views");
app = config(app);
var server = require("http").Server(app);
var io = require("socket.io")(server);

/*
mongoose.connect("mongodb://localhost:");
mongoose.connection.on("open",function(){
    console.log("Mongodb connected!");
});
*/
server.listen(app.get('port'),function(){
    console.log("Server started at :"+ app.get('port'));
});

io.on("connection",function(socket){
  console.log("Have connecting from Connection ID : " + socket.id);
  socket.on("disconnect",function(){
    console.log(socket.id + "  have been disconnected");
  });
});
