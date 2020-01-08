import React from 'react'
import { Input } from './Input'
import FormControl from '@material-ui/core/FormControl'
import Grid from '@material-ui/core/Grid'

const inputs = [
	{ label: 'Amount', name: 'amount', type: 'number' },
	{ label: 'Vendor', name: 'vendor' },
	{ label: 'Category', name: 'category' }
]

export default function Inputs() {
	return (
		<Grid container justify='center'>
			<FormControl>
				{inputs.map(i => (
					<Input key={i.name} label={i.label} name={i.name} type={i.type} />
				))}
			</FormControl>
		</Grid>
	)
}
