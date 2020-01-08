import React from 'react'
import '../../../style/Transaction.css'
import { TableRow, TableCell } from '@material-ui/core'
import Moment from 'react-moment'

export default function Transaction(props) {
	let t = props.transaction
	return (
		<TableRow key={t._id}>
			<TableCell>{t.vendor}</TableCell>
			<TableCell>{t.category}</TableCell>
			<TableCell>
				<span className={t.amount > 0 ? 'green' : 'red'}>
					${Math.abs(t.amount)}
				</span>
			</TableCell>
			<TableCell>
				<Moment date={t.date} format='LL'></Moment>
			</TableCell>
		</TableRow>
	)
}