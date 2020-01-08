export default class Transaction {
  constructor(amount, vendor, category) {
    this.amount = Math.abs(amount)
    this.vendor = vendor
    this.category = category
    this.date = Date.now()
  }
} 