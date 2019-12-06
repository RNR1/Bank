import React from "react"
import { Link } from "react-router-dom"
import { Grid, Button } from "@material-ui/core"

export default function Links(props) {
	return (
		<Grid 
		container
		justify="center"
		>
			<Grid item>
			<Button><Link to='/transactions'>Transactions</Link></Button>
			</Grid>
			<Grid item>
			<Button onClick={props.openDialog}>Operations</Button>
			</Grid>
		</Grid>
	)
}
