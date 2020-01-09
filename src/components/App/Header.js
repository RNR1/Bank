import React from 'react'
import Grid from '@material-ui/core/Grid'
import Logo from './Logo'
import Links from './Links'

export default function Header() {
	return (
		<Grid container justify='center'>
			<Logo />
			<Links />
		</Grid>
	)
}
