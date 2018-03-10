class BaseStyle {
  constructor() {
    this.styles = {}
  }

  _setStyle(key) {
    return value => this._getStyle(key, value)
  }

  _getStyle(key, value) {
    this.styles[key] = value
    return this
  }

  get() {
    const style = this.styles
    this.styles = {}
    return style
  }
}

export default BaseStyle
