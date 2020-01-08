import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

export default function CustomButton(props) {
	return (
		<Grid item>
			<Button variant='outlined' color='primary' onClick={props.action}>
				{props.label}
			</Button>
		</Grid>
	)
}
