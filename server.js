require("dotenv").config()
const express = require('express')
const budget = require("./models/budget")
const app = express()
app.use(express.urlencoded({extended: true}))
app.use("/static", express.static("public"))
app.get("/", (req, res) => res.redirect("/budget"))
app.get("/budget",(req, res)=>{
    res.render("index.ejs", {budget})
})
app.get("/budget/:id", (req, res)=> {
    res.render("show.ejs", {
        budget: budget[req.params.id],
        index: req.params.id
    });
})
const PORT = process.env.PORT 
app.listen(PORT, () => {
    console.log(`The Server is listening on port ${PORT}...`)
})