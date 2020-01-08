const express = require('express')
const Transaction = require('../models/Transaction')
const router = express.Router()

router.get('/transactions', async (req, res) => {
    let transactions
    try {
        transactions = await Transaction.find({}).sort({date: -1})
        res.status(200).send(transactions)
    } catch(err) { res.status(400).send(err) }
})

router.post('/transaction', async (req, res) => {
    let transaction = new Transaction({...req.body})
    try {
        await transaction.save()
        res.status(200).send('Transaction has been processed successfully!')
    } catch (err) {res.status(400).send(err)}
})

router.delete('/transaction', async (req, res) => {
    let transactionId = req.body.transactionId
    try {
        await Transaction.findByIdAndDelete(transactionId)
        res.status(200).send(`Transaction has been deleted successfully!`)
    } catch(err) { res.status(400).send(err) }
})

module.exports = router