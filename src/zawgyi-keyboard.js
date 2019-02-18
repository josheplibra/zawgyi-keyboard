import Mousetrap from 'mousetrap'

export class ZawgyiKeyboard {

  constructor(el) {
    this.mousetrap = new Mousetrap(el)
  }

  bind(keys, callback, action) {
    this.mousetrap.bind(keys, callback, action)
  }

  reset() {
    this.mousetrap.reset()
  }

  static reset() {
    Mousetrap.reset()
  }

}

export default ZawgyiKeyboard
