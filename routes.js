const { Router } = require('express')
const routes = Router()

const viewController = require('./controllers/viewController')
const recipesController = require('./controllers/recipesController')

routes.get('/', (req, res) => {
  res.redirect('/home')
})

// ======== VIEW ========
routes.get('/home', viewController.homePage)
routes.get('/about', viewController.aboutPage)
routes.get('/recipes', viewController.recipesPage)
routes.get('/recipes/:index', viewController.show)

// ======== ADMIN ========
routes.get("/admin/recipes", recipesController.index)
routes.get("/admin/recipes/create", recipesController.create)
routes.get("/admin/recipes/:index", recipesController.show)
// routes.get("/admin/recipes/:index/edit", recipesController.edit)

// routes.post("/admin/recipes", recipesController.post)
// routes.put("/admin/recipes", recipesController.put)
// routes.delete("/admin/recipes", recipesController.delete)

module.exports = routes
