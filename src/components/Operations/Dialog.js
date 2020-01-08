import React from 'react'
import { inject, observer } from 'mobx-react'
import Dialog from '@material-ui/core/Dialog'
import Operations from './Operations'

export const OperationsDialog = inject('operations')(
	observer(props => {
    props.operations.openDialog()
    return (
			<Dialog
				open={props.operations.dialog}
				onClose={props.operations.closeDialog}
				fullWidth={true}
				maxWidth='xs'
				children={
					<Operations
						history={props.history}
					/>
				}
			/>
		)
	})
)
