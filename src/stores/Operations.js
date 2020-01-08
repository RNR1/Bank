import { observable, action } from 'mobx'

class Operations {
	@observable amount = ''
	@observable vendor = ''
	@observable category = ''

	@observable dialog = false

	@action openDialog = () => this.dialog = true
	@action closeDialog = () => this.dialog = false

	@action handleInput = (name, value) => {
		this[name] = value
	}

	@action resetForm = () =>
		['amount', 'vendor', 'category'].forEach(i => (this[i] = ''))
}

export const operations = new Operations()
