import React from 'react'
import {
	ListItem,
	List,
	Avatar,
	ListItemAvatar,
	Grid,
	Icon
} from '@material-ui/core'

export default function Item(props) {
	return (
		<Grid item>
			<List>
				<ListItem divider>
					<ListItemAvatar>
						<Avatar>
							<Icon>{props.icon}</Icon>
						</Avatar>
					</ListItemAvatar>
					{props.content}
				</ListItem>
			</List>
		</Grid>
	)
}
