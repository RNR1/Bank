import React, { Component } from 'react'
import Picker from './DatePicker'
import {
	Grid,
	ListItem,
	ListItemText,
	List,
	Avatar,
	ListItemAvatar,
	ListItemSecondaryAction,
	IconButton
} from '@material-ui/core'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import DateRangeIcon from '@material-ui/icons/DateRange'
import DescriptionIcon from '@material-ui/icons/Description'
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import SelectMenu from './Select'
import {Redirect} from 'react-router-dom'
import {inject, observer} from 'mobx-react'

@inject("transactions", "general")
@observer
class ListsRow extends Component {
	
	handleClick = () => {
		this.setState({clicked: true}, this.resetMonth)
	}

	resetMonth = () => {
		this.props.transactions.monthSelector(null)
	}
	render() {
		let balance = this.props.transactions.currentBalance
		return (
			<Grid
				container
				justify='space-evenly'
				alignItems='stretch'
				alignContent='center'
				style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
				<Grid item style={{marginInlineStart: "56px"}}>
					<List>
						<ListItem key='date'>
							<ListItemAvatar>
								<Avatar>
									<DateRangeIcon />
								</Avatar>
							</ListItemAvatar>
							<Picker
								monthSelector={this.props.transactions.monthSelector}
								InputLabelProps={{
									shrink: true
								}}
							/>
						<ListItemSecondaryAction onClick={this.handleClick}>
                    <IconButton edge="end" aria-label="reset">
                      <SettingsBackupRestoreIcon />
											{this.state && this.state.clicked ? <Redirect to="/transactions" /> : null}
                    </IconButton>
                  </ListItemSecondaryAction>
						</ListItem>
					</List>
				</Grid>
				<Grid item style={{display: "grid", justifySelf: "center", marginInlineStart: "-20px"}}>
					<List>
						<ListItem key='balance' divider>
							<ListItemAvatar>
								<Avatar>
									<AttachMoneyIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText
								className={balance > 0 ? 'green' : 'red'}
								primary='Current Balance'
								secondary={`$${balance}`}
							/>
						</ListItem>
					</List>
				</Grid>
				<Grid item>
					<List>
						<ListItem key='category'>
							<ListItemAvatar>
								<Avatar>
									<DescriptionIcon />
								</Avatar>
							</ListItemAvatar>
							<SelectMenu
								categorySelector={this.props.transactions.categorySelector}
								category={this.props.transactions.category}
								categories={this.props.transactions.categories}
							/>
						</ListItem>
					</List>
				</Grid>
			</Grid>
		)
	}
}

export default ListsRow
