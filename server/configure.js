var connect = require("connect"),
    path = require("path"),
    logger = require("logger"),
    exphbs = require("express3-handlebars");
module.exports = function(app)
{
    app.engine("handlebars",exphbs.create({
        defaultLayout: "main",
        layoutsDir: app.get("views") + "/layouts",
        partialsDir: [app.get("views") + "/partials"]
    }).engine);
    app.set("view engine","handlebars");
    //app.use(connect.logger());
    //app.use(connect.bodyParser({
    //    uploadDir:path.join(__dirname, '../public/upload/temp')
    //}));
    //app.use(connect.json());
    app.use(connect.urlencoded());
    //app.use(connect.methodOverride());
    //app.use(connect.cookieParser('some-secret-value-here'));
    //app.use(app.router);
    return app;
}
