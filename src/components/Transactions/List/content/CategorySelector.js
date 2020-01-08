import React from 'react'
import { inject, observer } from 'mobx-react'
import Select from '../Select'

export const CategorySelector = inject('transactions')(
	observer(props => {
		return (
			<Select
				categorySelector={props.transactions.categorySelector}
				category={props.transactions.category}
				categories={props.transactions.categories}
			/>
		)
	})
)
