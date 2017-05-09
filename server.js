var express = require("express"),
    config = require("./server/configure"),
    app = express(),
    mongoose = require("mongoose");

app.set("port",process.env.PORT || 3000);
app.set("views",__dirname + "/views");
app = config(app);

/*
mongoose.connect("mongodb://localhost:");
mongoose.connection.on("open",function(){
    console.log("Mongodb connected!");
});
*/
var server = app.listen(app.get('port'),function(){
    console.log("Server started at :" + app.get('port'));
});
