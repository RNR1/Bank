import React, { Component } from 'react'
import List from './List/List'
import TransactionsTable from './Table/TransactionsTable'
import { observer, inject } from 'mobx-react'

@inject('transactions')
@observer
class Transactions extends Component {
	render() {
		return (
			<div>
				<List />
				<TransactionsTable />
			</div>
		)
	}
}

export default Transactions
