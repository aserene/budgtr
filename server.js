require("dotenv").config() // load variables from .env into process.env
const express = require('express'); // backend framework
const budget = require("./models/budget")
const app = express()
app.use(express.urlencoded({extended: true}))
app.use("/static", express.static("public"))
app.get("/", (req, res) => {
    // res.send("Hello")
    res.render("index.ejs", {budget})
})
const PORT = process.env.PORT 
app.listen(PORT, () => {
    console.log(`The Server is listening on port ${PORT}...`)
})