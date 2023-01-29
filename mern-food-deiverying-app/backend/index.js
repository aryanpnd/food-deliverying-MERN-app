const express = require('express')
const app = express()
const port = 5000
const mongodbConnect = require("./databaseConnetion")

mongodbConnect();

app.get('/', (req, res) => {
  res.send("listing...")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})