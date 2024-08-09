//handles routes regarding computer

const express = require('express')
const fs = require('fs');
const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
  fs.appendFileSync("logs.txt", `${req.method} computer route at ${Date.now()}\n`)
  next()
})

// define the home page route
router.get('/', (req, res) => {
  res.send('Computer home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About Computers')
})
// define the computer route
router.get('/:computer', (req, res) => {
    res.send(`This is ${req.params.computer} computer`)
  })

module.exports = router