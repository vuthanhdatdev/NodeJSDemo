var express = require('express'),
    path = require("path"),
    morgan = require("morgan"),
    bodyParser = require("body-parser"),
    methodOverride = require('method-override'),
    cookieParser = require('cookie-parser'),
    errorhandler = require('errorhandler'),
    routes = require('./routes'),
    moment = require("moment"),
    exphbs = require("express3-handlebars");
module.exports = function(app)
{
    app.engine("handlebars",exphbs.create({
        defaultLayout: "main",
        layoutsDir: app.get("views") + "/layouts",
        partialsDir: [app.get("views") + "/partials"],
        helpers:{
          timeago : function(timestamp){
            return moment(timestamp).startOf('minute').fromNow();
          }
        }
    }).engine);
    app.set("view engine","handlebars");
    app.use(morgan("dev"));
/*
    app.use(bodyParser({
      uploadDir:path.join(__dirname, '../public/upload/temp'),
      keepExtensions: true
    }));
*/
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(methodOverride());
    app.use(cookieParser("some-secret-value-here"));
    app.use(express.Router());
    app.use('/public/', express.static(path.join(__dirname, '../public')));
    app.use(express.static('public'));
    if (app.get('env') ==='development') {
      app.use(errorhandler());
    }
    routes.initialize(app, new express.Router());
    return app;
}
