import React from 'react'
import Grid from '@material-ui/core/Grid'
import Logo from './Logo'
import Links from './Links'

export default function Header(props) {
	return (
		<Grid container justify='center'>
			<Logo />
			<Links openDialog={props.openDialog} />
		</Grid>
	)
}
