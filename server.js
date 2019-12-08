const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const api = require('./server/routes/api')
const path = require('path')
const app = express()

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Transactions", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'build')));
app.use("/", api)

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 8020
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))