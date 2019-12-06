const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const api = require('./routes/api')
const app = express()

mongoose.connect("mongodb://localhost/Transactions", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

app.use("/", api)

const PORT = process.env.PORT || 8020
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))