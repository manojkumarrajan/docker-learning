const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World. Welcome to my docker learning demo app')
})

app.listen(3000)