const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs'); // setting default to ejs

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/product/:slug', (req, res) => {
    const productName = req.params.slug;
    const companyName = "Muman";
    res.render("index", {productName, companyName}); // rendering index from views
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})