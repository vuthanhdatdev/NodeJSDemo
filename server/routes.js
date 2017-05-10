var home = require("../controllers/home"),
    image = require("../controllers/image");

module.exports.initialize = function(app){
  app.get('/',home.index);
};
