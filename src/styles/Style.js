import BaseStyle from './BaseStyle'

class Style extends BaseStyle {
  constructor() {
    super()

    this.height = this._setStyle('height')
    this.width = this._setStyle('width')
    this.margin = this._setStyle('margin')
    this.marginTop = this._setStyle('marginTop')
    this.marginBottom = this._setStyle('marginBottom')
    this.marginLeft = this._setStyle('marginLeft')
    this.marginRight = this._setStyle('marginRight')
    this.padding = this._setStyle('padding')
    this.paddingTop = this._setStyle('paddingTop')
    this.paddingBottom = this._setStyle('paddingBottom')
    this.paddingLeft = this._setStyle('paddingLeft')
    this.paddingRight = this._setStyle('paddingRight')
    this.alignItems = this._setStyle('alignItems')
    this.justifyContent = this._setStyle('justifyContent')
    this.textAlign = this._setStyle('textAlign')
    this.color = this._setStyle('color')
    this.fontSize = this._setStyle('fontSize')
    this.fontFamily = this._setStyle('fontFamily')
    this.backgroundColor = this._setStyle('backgroundColor')
    this.borderRadius = this._setStyle('borderRadius')
    this.borderWidth = this._setStyle('borderWidth')
    this.borderColor = this._setStyle('borderColor')
    this.borderTopRadius = this._setStyle('borderTopRadius')
    this.borderTopWidth = this._setStyle('borderTopWidth')
    this.borderTopColor = this._setStyle('borderTopColor')
    this.borderBottomRadius = this._setStyle('borderBottomRadius')
    this.borderBottomWidth = this._setStyle('borderBottomWidth')
    this.borderBottomColor = this._setStyle('borderBottomColor')
    this.borderLeftRadius = this._setStyle('borderLeftRadius')
    this.borderLeftWidth = this._setStyle('borderLeftWidth')
    this.borderLeftColor = this._setStyle('borderLeftColor')
    this.borderRightRadius = this._setStyle('borderRightRadius')
    this.borderRightWidth = this._setStyle('borderRightWidth')
    this.borderRightColor = this._setStyle('borderRightColor')
  }

  size(value) {
    return this
      .width(value)
      .height(value)
  }

  circle(value) {
    return this
      .width(value)
      .height(value)
      .borderRadius(value / 2)
  }
}

export default new Style()