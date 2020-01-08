import React, { Component } from 'react'
import { Table, Paper, Grid } from '@material-ui/core'
import TableHead from './TableHead'
import TableBody from './TableBody'
import { observer, inject } from 'mobx-react'

@inject('transactions')
@observer
class TransactionsTable extends Component {
	render() {
		return (
			<Grid item xs>
				<Paper
					elevation={8}
					style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
					<Table size='small' stickyHeader={true}>
						<TableHead />
						<TableBody transactions={this.props.transactions.transactions} />
					</Table>
				</Paper>
			</Grid>
		)
	}
}

export default TransactionsTable
