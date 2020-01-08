import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import { inject, observer } from 'mobx-react'
import { CustomisedToolbar as Toolbar } from './Toolbar'
import Inputs from './Inputs'
import Buttons from './Buttons'
import Transaction from '../../models/Transaction'

@inject('operations', 'transactions', 'popup')
@observer
class Operations extends Component {
	invalidInput = transaction =>
		Object.keys(transaction).some(i => !transaction[i])

	transaction(type) {
		try {
			let fields = this.props.operations
			let transaction = new Transaction(
				fields.amount,
				fields.vendor,
				fields.category
			)
			return this.validate(transaction, type)
		} catch (err) {
			throw new Error(err.message)
		}
	}

	validate = (transaction, type) => {
		if (this.invalidInput(transaction)) {
			throw new Error('All fields are required')
		}
		if (type === 'withdraw') {
			transaction.amount = -transaction.amount
		}
		return transaction
	}

	makeTransaction = async type => {
		try {
			let transaction = this.transaction(type)
			let pushTransaction = await this.props.transactions.pushTransaction(
				transaction
			)
			this.props.popup.displayPopup('success', pushTransaction)
			this.props.history.goBack()
			this.props.operations.resetForm()
		} catch (err) {
			return this.props.popup.displayPopup('error', err.message)
		}
	}

	withdraw = () => this.makeTransaction('withdraw')

	render() {
		return (
			<Container fixed style={{ display: 'grid', height: '45vh' }}>
				<Toolbar history={this.props.history} />
				<Inputs />
				<Buttons withdraw={this.withdraw} deposit={this.makeTransaction} />
			</Container>
		)
	}
}

export default Operations
