module.exports = {
  index: function(req, res) {
    res.send('The home:index controller');
  },
  hello: function(req,res) {
    res.render('index.handlebars');
  }
};
