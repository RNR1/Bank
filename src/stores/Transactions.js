import { observable, action, computed } from 'mobx'
import axios from 'axios'
const API_URL = process.env.REACT_APP_API_URL

class Transactions {
	@observable _transactions = []
	@observable _month = null
	@observable _category = null

	@computed get transactions() {
		if (this._month !== null) {
			return this.monthlyBreakdown
		} else if (this._category !== null) {
			return this.categoryBreakdown
		} else {
			return this._transactions
		}
	}

	@computed get numOfTransactions() {
		return this._transactions.length
	}
	@computed get currentBalance() {
		return this._transactions.length === 0
			? 0
			: this._transactions
					.map(t => t.amount)
					.reduce((prev, current) => prev + current)
	}

	@computed get categories() {
		return [...new Set(this._transactions.map(t => t.category))]
	}

	@action monthSelector = month => {
		this._month = month

	}

	@action categorySelector = category => {
		category = category === '' ? null : category
		this._category = category
	}

	@computed get monthlyBreakdown() {
		return !this.numOfTransactions || !this._month === null
			? []
			: this._transactions.filter(
					t => new Date(t.date).getMonth() === parseInt(this._month)
			  )
	}

	@computed get categoryBreakdown() {
		return !this.numOfTransactions || !this._category
			? []
			: this._transactions.filter(t => t.category === this._category)
	}

	@computed get combinedBreakdown() {
		return !this.numOfTransactions || (!this._category && !this._month)
			? []
			: this._transactions.filter(
					t =>
						t.category === this._category &&
						new Date(t.date).getMonth() === parseInt(this._month)
			  )
	}

	@action async getTransactions() {
		let transactions
		try {
			transactions = await axios.get(`${API_URL}/api/transactions`)
		} catch (err) {
			return err
		}
		this._transactions = transactions.data
	}

	@action async pushTransaction(transaction) {
		try {
			let postTransaction = await axios.post(
				`${API_URL}/api/transaction`,
				transaction
			)
			this.getTransactions()
			return postTransaction.data
		} catch (err) {
			throw new Error(err.message)
		}
	}

	@action async deleteTransaction(transactionId) {
		try {
			await axios.delete(`${API_URL}/api/transaction`, {
				data: { transactionId }
			})
		} catch (err) {
			console.log(err)
		}
		this.getTransactions()
	}
}

export const transactions = new Transactions()
