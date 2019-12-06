import { observable, action, computed } from 'mobx'
import axios from 'axios'

class Transactions {
	@observable transactions = []
    @observable month
    @observable category
	@computed get numOfTransactions() {
		return this.transactions.length
	}

	@computed get currentBalance() {
		return this.transactions.length === 0
			? 0
			: this.transactions
					.map(t => t.amount)
					.reduce((prev, current) => prev + current)
	}

	@computed get categories() {
		return [...new Set(this.transactions.map(t => t.category))]
	}

	@action monthSelector = month => {
		this.month = month
    }

    @action categorySelector = category => {
        category = category === '' ? 'all' : category
		this.category = category
    }
    
    @computed get selectedMonth() {
        return this.month
    }

    @computed get allTransactions() {
        return this.transactions
    } 

	@computed get monthlyBreakdown() {
        return this.transactions.length === 0 || !this.month
			? null
			: this.transactions.filter(
					t => new Date(t.date).getMonth() === parseInt(this.month)
			  )
    }
    
    @action catagoryBreakdown = category => {
        return this.transactions.filter(
            t => t.category === category
        )} 

	@action async getTransactions() {
		let transactions
		try {
			transactions = await axios.get('http://localhost:8020/transactions')
		} catch (err) {
			return err
		}
		this.transactions = transactions.data
	}

	@action async pushTransaction(transaction) {
		try {
			await axios.post('http://localhost:8020/transaction', transaction)
		} catch (err) {
			console.log(err)
		}
		this.getTransactions()
	}

	@action async deleteTransaction(transactionId) {
		try {
			await axios.delete('http://localhost:8020/transaction', {
				data: { transactionId }
			})
		} catch (err) {
			console.log(err)
		}
		this.getTransactions()
	}
}

export const transactions = new Transactions()
