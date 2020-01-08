import React from 'react'
import { inject, observer } from 'mobx-react'
import { Grid, Toolbar, IconButton, Typography } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

export const CustomisedToolbar = inject('operations')(
	observer(props => {
		return (
			<Grid item>
				<Toolbar style={{ justifySelf: 'start', alignSelf: 'center' }}>
					<IconButton
						edge='start'
						color='inherit'
						onClick={props.history.goBack}
						aria-label='close'>
						<CloseIcon />
					</IconButton>
					<Typography variant='h6'>Operations</Typography>
				</Toolbar>
			</Grid>
		)
	})
)
