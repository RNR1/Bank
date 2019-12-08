const express = require('express')
const Transaction = require('../models/Transaction')
const router = express.Router()

router.get('/transactions', async (req, res) => {
    let transactions
    try {
        transactions = await Transaction.find({}).sort({date: -1})
    } catch(err) { res.status(400).send(err) }
    res.status(200).send(transactions)
})

router.post('/transaction', async (req, res) => {
    let transaction = new Transaction({...req.body})
    try {
        await transaction.save()
    } catch (err) {res.status(404).send(err)}
    res.status(200).send(transaction)
})

router.delete('/transaction', async (req, res) => {
    let transactionId = req.body.transactionId
    try {
        await Transaction.findByIdAndDelete(transactionId)
    } catch(err) { res.status(400).send(err) }
    res.status(200).send("OK")
})

module.exports = router