import React from 'react'
import { TableHead, TableRow, TableCell } from '@material-ui/core'

const categories = ['Vendor', 'Category', 'Amount', 'Date']
export default function Head() {
	return (
		<TableHead>
			<TableRow key='rows'>
				{categories.map(k => (
					<TableCell variant='head' key={k}>
						<strong>{k}</strong>
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	)
}
