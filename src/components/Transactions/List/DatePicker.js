import 'date-fns'
import React from 'react'
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers'

export default function Picker(props) {
	const [selectedDate, setSelectedDate] = React.useState(null)

	const handleDateChange = date => {
		setSelectedDate(date)
		props.monthSelector(date.getMonth())
	}

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<Grid container justify='space-around'>
				<DatePicker
					disableFuture='true'
					disableToolbar
					views={['month']}
					variant='inline'
					format='MMMM'
					margin='normal'
					id='date-picker-inline'
					label='View by month'
					value={selectedDate}
					onChange={handleDateChange}
				/>
			</Grid>
		</MuiPickersUtilsProvider>
	)
}
