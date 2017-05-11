module.exports = {
  index: function(req, res) {
    res.send('The home:index controller');
  },
  hello: function(req,res) {
    var viewModel = {
      id : 1
    };
    res.render('index.handlebars',viewModel);
  }
};
