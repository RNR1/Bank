import React, { Component } from "react"
import {
	TextField,
	Container,
	Button,
	Grid,
	Toolbar,
	IconButton,
	Typography,
	FormControl
} from "@material-ui/core"
import CustomizedSnackbars from "./Snackbar"
import CloseIcon from "@material-ui/icons/Close"
import {inject, observer} from 'mobx-react'

@inject("general", "transactions")
@observer
class Operations extends Component {
	constructor() {
		super()
		this.state = {
			displaySnackbar: null,
			open: false,
			variant: "",
			message: ""
		}
	}

	handleInput = (event) => {
        const target = event.target
		const value = target.value
        const name = target.name
        this.props.general.handleInput(name, value)
    }

	handlePopUp = (variant, message) => {
		this.setState({
			displaySnackbar: true,
			open: true,
			variant,
			message,
			key: Date.now()
		})
	}

	hidePopUp = () => {
		this.setState({ open: false })
	}

	closeDialog = () => this.props.closeDialog()

	invalidInput = transaction =>
		Object.keys(transaction).some(i => !transaction[i])

	withdraw = () => {
		let transaction = {
			amount: parseInt(-this.props.general.amount),
			vendor: this.props.general.vendor,
			category: this.props.general.category,
			date: Date.now()
		}
		if (this.invalidInput(transaction)) {
			return this.handlePopUp("error", "All fields are required")
		}
		this.props.transactions.pushTransaction(transaction)
		this.props.handlePopUp(
			"success",
			`Transaction has been processed successfully!`
        )
        this.closeDialog()
	}

	deposit = () => {
		let transaction = {
			amount: parseInt(this.props.general.amount),
			vendor: this.props.general.vendor,
			category: this.props.general.category,
			date: Date.now()
		}
		if (this.invalidInput(transaction)) {
			return this.handlePopUp("error", "All fields are required")
		}
		this.props.handlePopUp(
			"success",
			`Transaction has been processed successfully!`
		)
        this.props.transactions.pushTransaction(transaction)
        this.closeDialog()
	}

	render() {
		return (
			<Container fixed style={{ height: "50vh", width: "40vw" }}>
				<Grid container justify='flex-start'>
					<Toolbar>
						<IconButton
							edge='start'
							color='inherit'
							onClick={this.closeDialog}
							aria-label='close'
						>
							<CloseIcon />
						</IconButton>
						<Typography variant='h6'>Operations</Typography>
					</Toolbar>
				</Grid>
				<Grid container justify='center'>
					<FormControl>
						<Grid item>
							<TextField
								id='standard-basic'
								label='Amount'
								type='number'
								margin='dense'
								name='amount'
								required={true}
								value={this.props.general.amount}
								onChange={this.handleInput}
							/>
						</Grid>
						<Grid item>
						<TextField
							id='standard-basic'
							label='Vendor'
							type='text'
							margin='dense'
							name='vendor'
							required={true}
							value={this.props.general.vendor}
							onChange={this.handleInput}
						/>
						</Grid>
						<Grid item>
						<TextField
							id='standard-basic'
							label='Category'
							type='text'
							name='category'
							margin='dense'
							required={true}
							value={this.props.general.category}
							onChange={this.handleInput}
						/>
						</Grid>
					</FormControl>
				</Grid>
				<Grid container justify='space-evenly'>
					<Grid item>
						<Button
							variant='outlined'
							color='primary'
							onClick={this.withdraw}
						>
							Withdraw
						</Button>
					</Grid>
					<Grid item>
						<Button
							variant='outlined'
							color='primary'
							onClick={this.deposit}
						>
							Deposit
						</Button>
					</Grid>
				</Grid>
				{this.state.displaySnackbar ? (
					<CustomizedSnackbars
						key={this.state.key}
						open={this.state.open}
						message={this.state.message}
						variant={this.state.variant}
						onClose={this.hidePopUp}
					/>
				) : null}
			</Container>
		)
	}
}

export default Operations
