import React from 'react'
import Button from './Button'
import Grid from '@material-ui/core/Grid'

export default function Buttons(props) {
	const buttons = [
		{ action: props.withdraw, label: 'Withdraw' },
		{ action: props.deposit, label: 'Deposit' }
	]

	return (
		<Grid container justify='space-evenly'>
			{buttons.map(b => (
				<Button key={b.label} action={b.action} label={b.label} />
			))}
		</Grid>
	)
}
