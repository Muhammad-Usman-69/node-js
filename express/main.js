const express = require('express')
const app = express()
const port = 3000

//to allow user to access static files, put it in dir
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send(`Hello Za World!`)
}).get('/about', (req, res) => {
    res.send(`I am handsome`)
}).get('/blog', (req, res) => {
    res.send(`This is a blog`)
})

app.get('/:slug.html', (req, res) => {
    res.send(`Hello Za World! Check your console.`)
    console.log("Params:", req.params.slug);
    console.log("Queries:", req.query)
})

//handling post req
app.post("/", (req, res) => {
    res.send(`POST method was triggered.`)
})

//sending files
app.get("/table", (req, res) => {
    // second para is the absolute path to current dir
    res.sendFile("templates/table.html", {root: __dirname});
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})