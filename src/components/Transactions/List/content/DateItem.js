import React, { Component } from 'react'
import Picker from '../DatePicker'
import { inject, observer } from 'mobx-react'
import { ListItemSecondaryAction, IconButton } from '@material-ui/core'
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore'
import { Redirect } from 'react-router-dom'

@inject('transactions')
@observer
class DateItem extends Component {
	datePicker = () => (
		<Picker
			monthSelector={this.props.transactions.monthSelector}
			InputLabelProps={{
				shrink: true
			}}
		/>
	)

	dateReset = () => (
		<ListItemSecondaryAction onClick={this.handleClick}>
			<IconButton edge='end' aria-label='reset'>
				<SettingsBackupRestoreIcon />
			</IconButton>
		</ListItemSecondaryAction>
	)

	handleClick = () => {
		this.setState({ clicked: true }, this.resetMonth)
	}

	resetMonth = () => {
		this.props.transactions.monthSelector(null)
	}
	render() {
		return (
			<div>
				{this.datePicker()}
				{this.dateReset()}
				{this.state?.clicked ? (
					<Redirect to='/transactions' />
				) : null}
			</div>
		)
	}
}

export default DateItem
