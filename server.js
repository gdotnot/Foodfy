const express = require("express")
const nunjucks = require("nunjucks")
const data = require("./data")

const server = express()

server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server,
    noCache:true
})

server.get("/", (req, res) => {
    res.render("home", {items: data })
})

server.get("/about", (req, res) => {
    res.render("about")
})

server.get("/recipes", (req, res) => {
    res.render("recipes", { items: data })
})

server.get("/recipes/:index", (req, res) => {
    const recipeIndex = req.params.index;
    if (!data[recipeIndex]){
        return res.render("error")
    }

    return res.render("recipe", { item: data[recipeIndex]})
})

server.listen(5000)


