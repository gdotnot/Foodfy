const data = require('../data')

exports.index = function (req, res) {
  return res.render('admin/recipes', { recipes: data})
}

exports.show = function (req, res) {
  const { index } = req.params;
  if (!data[index]){
      return res.render('error')
  }

  return res.render('admin/recipeInfo', { item: data[index]})
}

exports.create = function (req, res) {
  return res.render('admin/create')
}
