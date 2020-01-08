import React from 'react'
import ListItemText from '@material-ui/core/ListItemText'
import { inject, observer } from 'mobx-react'

export const Balance = inject('transactions')(
	observer(props => {
		let balance = props.transactions.currentBalance
		return (
			<ListItemText
				className={balance > 0 ? 'green' : 'red'}
				primary='Current Balance'
				secondary={`$${balance}`}
			/>
		)
	})
)
