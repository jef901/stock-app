const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.status(200).send('<h1>Hello World!</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})