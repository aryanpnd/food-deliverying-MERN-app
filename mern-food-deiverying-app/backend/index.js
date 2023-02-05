const express = require('express')
const app = express()
const port = 5000
const mongodbConnect = require("./databaseConnetion")
const cors = require('cors')

// const user = require('./Routes/createUser')
// const availableItemsData = require('./Routes/displayData')


mongodbConnect();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

    res.header(
        "Access-Control-Allow-Headers",

        "Origin, X-Requested-With, Content-Type, Accept,DELETE, POST, GET, OPTIONS"
        
        )

    next();
})     //must 


app.use(express.json())


app.use('/api', require('./Routes/createUser'))
app.use('/api', require('./Routes/displayData'))
app.use('/api', require('./Routes/orderData'))


app.get('/', (req, res) => {
    res.send("listing...")
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
