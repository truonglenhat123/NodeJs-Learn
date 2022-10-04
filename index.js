const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello Cris Lee <3')
})
app.get('/log-in', (req, res) => {
    res.send('welcom to login page')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})