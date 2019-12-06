import React, { Component } from 'react'
import ListsRow from './ListsRow'
import TransactionsTable from './TransactionsTable'
import { observer, inject } from 'mobx-react'

@inject("transactions", "general")
@observer
class Transactions extends Component {

	render() {
		return (
        <div>
            <ListsRow />
            <TransactionsTable />
        </div>
        )
	}
}

export default Transactions