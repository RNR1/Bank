import { observable, action } from 'mobx'

class Popup {
  @observable show = false
  @observable variant = ''
  @observable message = ''
  
  @action displayPopup = (variant, message) => {
    this.show = true
    this.variant = variant
    this.message = message
  }

  @action hide = () => this.show = false
}

export const popup = new Popup()