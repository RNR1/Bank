import React from "react"
import { Link } from "react-router-dom"
import { Grid, Button } from "@material-ui/core"

export default function Links() {
	return (
		<Grid 
		container
		justify="center"
		>
			<Grid item>
			<Button component={Link} to='/transactions'>Transactions</Button>
			</Grid>
			<Grid item>
			<Button component={Link} to='/operations'>Operations</Button>
			</Grid>
		</Grid>
	)
}
