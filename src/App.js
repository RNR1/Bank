import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import Transactions from './components/Transactions'
import Operations from './components/Operations'
import Links from './components/Links'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import CustomizedSnackbars from './components/Snackbar'
import { Dialog, Grid } from '@material-ui/core'
import './style/App.css'

@inject('transactions', 'general')
@observer
class App extends Component {
	constructor() {
		super()
		this.state = {
			openDialog: false,
			openPopup: false,
			displaySnackbar: null,
			variant: '',
			message: '',
			month: ''
		}
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

	openDialog = () => this.setState({ openDialog: true })

	closeDialog = () => this.setState({ openDialog: false })

	componentDidMount = () => {
		this.props.transactions.getTransactions()
	}

	render() {

		return (
			<Router>
				<div className='background'></div>
				<div className='App'>
					<Grid container justify='center'>
						<img className='logo' src='/logo.png' alt='logo' />
						<Links openDialog={this.openDialog} />
					</Grid>

					<Route exact path='/transactions' component={Transactions} />					
					
					<Route
						exact
						path='/breakdown/category/:category'
						render={({match}) =>
						{
							return match.params.category === 'all' ? (
								<Redirect to='/transactions' />
							) : (
								<Transactions/>
							)
						}}
					/>
					{this.props.transactions._category !== null ? (
					<Redirect to={`/breakdown/Category/${this.props.transactions._category}`} />
				) : null}
					<Route
						exact
						path='/breakdown/:month'
						render={({ match }) =>
							parseInt(match.params._month) ===
							new Date().getMonth() ? (
								<Redirect to='/transactions' />
							) : ( <Transactions/>)}
					/>
				</div>
				
					{this.props.transactions._month !== null ? (
					<Redirect to={`/breakdown/${this.props.transactions._month}`} />
				) : null}
				<Dialog
					open={this.state.openDialog}
					onClose={this.closeDialog}
					fullWidth={true}
					maxWidth='xs'
					children={
						<Operations
							closeDialog={this.closeDialog}
							handlePopUp={this.handlePopUp}
						/>
					}
				/>
				{this.state.displaySnackbar ? (
					<CustomizedSnackbars
						key={this.state.key}
						open={this.state.open}
						message={this.state.message}
						variant={this.state.variant}
						onClose={this.hidePopUp}
					/>
				) : null}
				
			</Router>
		)
	}
}

export default App
