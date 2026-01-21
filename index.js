const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('This is my node js project')
})

app.listen(port,'0.0.0.0', () => {
  console.log(`Example app listening on port ${port}`)
})
