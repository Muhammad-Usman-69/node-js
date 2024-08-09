//Middleware are basically functions which run before a request and can be used to for logging info, cookie validation & check if user is logged in.

const express = require('express')
const fs = require('fs');
const app = express()
const port = 3000

//creating a middleware, we can modify request
const myLogger = function (req, res, next) {
    fs.appendFileSync("logs.txt", `${req.method} middleware at ${Date.now()}\n`)
    next() // sends req to the next middleware 
}

app.use(myLogger)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})