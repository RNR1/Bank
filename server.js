const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const api = require('./server/routes/api')
const path = require('path')
const app = express()
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

if (process.env.ENVIRONMENT === "DEV") {
	const co = require('./server/crossOrigin')
	app.use(co)
}

app.use(express.static(path.join(__dirname, 'build')));
app.use("/api", api)

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))