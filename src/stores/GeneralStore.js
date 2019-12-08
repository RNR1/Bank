import {observable, action } from 'mobx'

class GeneralStore {
    
    @observable amount
    @observable vendor = ""
    @observable category = ""
    
    @action handleInput = (name, value) => {
		this[name] = value
	}
}

export const general = new GeneralStore()