import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Grid } from '@material-ui/core'
import DateItem from './content/DateItem'
import ListItem from './ListItem'
import { Balance } from './content/Balance'
import { CategorySelector } from './content/CategorySelector'

@inject('transactions')
@observer
class List extends Component {
	render() {
		return (
			<Grid
				className='lists-row'
				container
				justify='space-evenly'
				alignItems='stretch'
				alignContent='center'>
				<ListItem key='date' icon='date_range' content={<DateItem />} />
				<ListItem key='balance' icon='attach_money' content={<Balance />} />
				<ListItem
					key='category'
					icon='description'
					content={<CategorySelector />}
				/>
			</Grid>
		)
	}
}

export default List
