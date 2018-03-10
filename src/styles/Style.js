import BaseStyle from './BaseStyle'

class Style extends BaseStyle {
  constructor() {
    super()

    this.height = this._style('height')
    this.width = this._style('width')
    this.margin = this._style('margin')
    this.marginTop = this._style('marginTop')
    this.marginBottom = this._style('marginBottom')
    this.marginLeft = this._style('marginLeft')
    this.marginRight = this._style('marginRight')
    this.padding = this._style('padding')
    this.paddingTop = this._style('paddingTop')
    this.paddingBottom = this._style('paddingBottom')
    this.paddingLeft = this._style('paddingLeft')
    this.paddingRight = this._style('paddingRight')
    this.alignItems = this._style('alignItems')
    this.justifyContent = this._style('justifyContent')
    this.textAlign = this._style('textAlign')
    this.color = this._style('color')
    this.fontSize = this._style('fontSize')
    this.fontFamily = this._style('fontFamily')
    this.backgroundColor = this._style('backgroundColor')
    this.borderRadius = this._style('borderRadius')
    this.borderWidth = this._style('borderWidth')
    this.borderColor = this._style('borderColor')
    this.borderTopRadius = this._style('borderTopRadius')
    this.borderTopWidth = this._style('borderTopWidth')
    this.borderTopColor = this._style('borderTopColor')
    this.borderBottomRadius = this._style('borderBottomRadius')
    this.borderBottomWidth = this._style('borderBottomWidth')
    this.borderBottomColor = this._style('borderBottomColor')
    this.borderLeftRadius = this._style('borderLeftRadius')
    this.borderLeftWidth = this._style('borderLeftWidth')
    this.borderLeftColor = this._style('borderLeftColor')
    this.borderRightRadius = this._style('borderRightRadius')
    this.borderRightWidth = this._style('borderRightWidth')
    this.borderRightColor = this._style('borderRightColor')
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