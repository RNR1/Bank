import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { BrowserRouter as Router } from 'react-router-dom'
import Popup from './components/App/Snackbar'
import Header from './components/App/Header'
import Routes from './components/App/Routes'
import './style/App.css'

@inject('transactions', 'popup')
@observer
class App extends Component {
	componentDidMount = () => {
		this.props.transactions.getTransactions()
	}

	popupHandler = () => {
		let popup = this.props.popup
		if (!popup.show) {return}
		return (
			<Popup
				key={Date.now}
				open={popup.show}
				message={popup.message}
				variant={popup.variant}
				onClose={popup.hide}
			/>
		)
	}

	render() {
		return (
			<Router>
				<div className='background'></div>
				<div className='App'>
					<Header />
					<Routes />
					{this.popupHandler()}
				</div>
			</Router>
		)
	}
}

export default App
