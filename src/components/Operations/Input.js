import React from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import { inject, observer } from 'mobx-react'

export const Input = inject('operations')(
	observer((props) => {
    
    const handleInput = event => {
      const target = event.target
      let value = target.value
      const name = target.name
      if (name === 'amount') {
        value = Number(value)
      }
      props.operations.handleInput(name, value)
    }
    
    return (
			<Grid item>
				<TextField
					label={props.label}
					margin='dense'
					name={props.name}
          type={props.type || 'text'}
					required={true}
					value={props.operations[props.name]}
					onChange={handleInput}
				/>
			</Grid>
		)
	})
)
