const express = require('express')
const app = express()
const port = 5000
const mongodbConnect = require("./databaseConnetion")
const user = require('./Routes/createUser')

mongodbConnect();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

    res.header(

        "Access-Control-Allow-Headers",

        "Origin, X-Requested-With, Content-Type, Accept")

    next();
})     //must 

app.use(express.json())
app.use('/api', user)


app.get('/', (req, res) => {
    res.send("listing...")
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
