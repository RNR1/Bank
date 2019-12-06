import React, { Component } from "react"
import "../style/Transaction.css"
import { Link } from "react-router-dom"
import { TableRow, TableCell } from "@material-ui/core"
import Moment from "react-moment"

class Transaction extends Component {
	render() {
		let t = this.props.transaction
		return (
			<TableRow key={t._id} variant=''>
				<TableCell>{t.vendor}</TableCell>
				<TableCell>
					<Link to={`/breakdown/category/${t.category}`}>
						{t.category}
					</Link>
				</TableCell>
				<TableCell>
					<span className={t.amount > 0 ? "green" : "red"}>
						${Math.abs(t.amount)}
					</span>
				</TableCell>
				<TableCell>
					<Moment date={t.date} format='LL'></Moment>
				</TableCell>
			</TableRow>
		)
	}
}

export default Transaction