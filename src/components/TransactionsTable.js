import React, { Component } from 'react'
import {
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	Paper,
	Grid
} from '@material-ui/core'
import Transaction from './Transaction'
import { observer, inject } from 'mobx-react'

@inject('transactions')
@observer
class TransactionsTable extends Component {
	constructor() {
		super()
		this.state = {
			transactions: null
		}
	}
	
	

	getTransactions = () => {
		return (
			<TableBody>
				{this.props.transactions.transactions.map(t => (
					<Transaction key={t._id} transaction={t} />
				))}
			</TableBody>
		)
	}

	

	viewTransactionsByCategory = () => {
		if (!this.props.transactions.categoryBreakdown) {
			return
		}
		let transactions = this.getCategoryBreakdown()
		return (
			<TableBody>
				{transactions.map(t => (
					<Transaction key={t._id} transaction={t} />
				))}
			</TableBody>
		)
	}

	render() {
		const transactions = this.props.transactions.transactions
		return (
			<Grid item xs>
				<Paper
					elevation={8}
					style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
					<Table size='small' stickyHeader={true}>
						<TableHead>
							<TableRow key='rows'>
								{['Vendor', 'Category', 'Amount', 'Date'].map(k => (
									<TableCell variant='head' key={k}>
										<strong>{k}</strong>
									</TableCell>
								))}
							</TableRow>
						</TableHead>
						<TableBody>
							{transactions.map(t => (
								<Transaction key={t._id} transaction={t} />
				))}
			</TableBody>
					</Table>
				</Paper>
			</Grid>
		)
	}
}

export default TransactionsTable
