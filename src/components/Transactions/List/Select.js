import React from "react"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import Select from "@material-ui/core/Select"
import FormControl from "@material-ui/core/FormControl"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
	button: {
		display: "block",
		marginTop: theme.spacing(2)
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120
	}
}))

export default function SelectMenu(props) {
	const classes = useStyles()
	const [category, setCategory] = React.useState("")
	const [open, setOpen] = React.useState(false)

	
	const handleChange = event => {
		setCategory(event.target.value)
		props.categorySelector(event.target.value)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const handleOpen = () => {
		setOpen(true)
	}

	return (
		<div>
			<FormControl className={classes.formControl}>
				<InputLabel id='demo-controlled-open-select-label'>
					Category
				</InputLabel>
				<Select
					labelId='demo-controlled-open-select-label'
					id='demo-controlled-open-select'
					open={open}
					onClose={handleClose}
					onOpen={handleOpen}
					value={category}
					onChange={handleChange}
				>
					<MenuItem value=''>
						<em>All</em>
					</MenuItem>
					{props.categories.map(c => (
						<MenuItem key={c} value={c}>
							{c}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	)
}
