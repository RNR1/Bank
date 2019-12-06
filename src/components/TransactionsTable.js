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
			transactionsByMonth: null,
			month: null
		}
	}

	getMonthlyBreakdown = () => {
		console.log(this.props.transactions.monthlyBreakdown)		
	}

	viewTotalTransactions = () => {
		if (!this.props.transactions.transactions) { return }
		let transactions = this.props.transactions.allTransactions

		return (
			<TableBody>
				{transactions.map(t => (
					<Transaction key={t._id} transaction={t} />
				))}
			</TableBody>
		)
	}

	viewTransactionsByMonth = () => {
		if (!this.props.transactions.monyhlyBreakdown) { return }
		let transactions = this.props.transactions.monthlyBreakdown
		return (
			<TableBody>
				{transactions.map(t => (
					<Transaction key={t._id} transaction={t} />
				))}
			</TableBody>
		)
	}

	render() {
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
						{this.props.transactions.monthlyBreakdown !== null
							? this.getMonthlyBreakdown
							: null}
					</Table>
				</Paper>
			</Grid>
		)
	}
}

export default TransactionsTable
