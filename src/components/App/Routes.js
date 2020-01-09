import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Route, Redirect } from 'react-router-dom'
import Transactions from '../Transactions/Transactions'
import { OperationsDialog } from '../Operations/Dialog'

@inject('transactions')
@observer
class Routes extends Component {
	Home() {
		return (
			<Route exact path='/'>
				{this.RedirectHome()}
			</Route>
		)
	}

	RedirectHome() {
		return <Redirect to='/transactions' />
	}

	Transactions() {
		return <Route exact path='/transactions' component={Transactions} />
	}

	Operations = () => {
		return (
			<Route
				exact
				path='/operations'
				render={({ history }) => <OperationsDialog history={history} />}
				pr
			/>
		)
	}
	CategoryBreakdown() {
		return (
			<Route
				exact
				path='/breakdown/category/:category'
				component={Transactions}
			/>
		)
	}

	MonthBreakdown() {
		return <Route exact path='/breakdown/:month' component={Transactions} />
	}

	// RedirectToMonth() {
	// 	return this.props.transactions._month !== null ? (
	// 		<Redirect to={`/breakdown/${this.props.transactions._month}`} />
	// 	) : null
	// // }

	// RedirectToCategory() {
	// 	let category = this.props.transactions._category
	// 	return category !== null ? (
	// 		<Redirect
	// 			to={`/breakdown/category/${this.props.transactions._category}`}
	// 		/>
	// 	) : null
	// }

	render() {
		return (
			<main>
				{this.Home()}
				{this.Transactions()}
				{this.Operations()}
				{this.CategoryBreakdown()}
				{this.MonthBreakdown()}
				{/* {this.RedirectToMonth()} */}
				{/* {this.RedirectToCategory()} */}
			</main>
		)
	}
}

export default Routes
