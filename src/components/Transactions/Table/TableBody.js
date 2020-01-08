import React from 'react'
import Transaction from './Transaction'
import TableBody from '@material-ui/core/TableBody'

export default function Body(props) {
	return (
		<TableBody>
			{props.transactions.map(t => (
				<Transaction key={t._id} transaction={t} />
			))}
		</TableBody>
	)
}