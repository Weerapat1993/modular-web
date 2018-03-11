import { BaseStyle } from 'Styles/Style'

class Style extends BaseStyle {
  // constructor() {
  //   super()
  //   // Customize Style
  //   this.size = value => this.width(value).height(value)
  //   this.circle = value => this.width(value).height(value).borderRadius(value / 2)
  // }

  // Customize style
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