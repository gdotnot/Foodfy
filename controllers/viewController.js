const data = require('../data')

exports.homePage = function (req, res) {
    res.render('users/home', {items: data })
}

exports.aboutPage = function (req, res) {
  res.render('users/about')
}

exports.recipesPage = function (req, res) {
  res.render('users/recipes', { recipes: data })
}

exports.show = function (req, res) {
  const { index } = req.params;
  if (!data[index]){
      return res.render('error')
  }

  return res.render('users/recipeInfo', { recipe: data[index]})
}
