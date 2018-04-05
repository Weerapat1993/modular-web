import { BaseStyle } from './Style'

export class GlobalStyle extends BaseStyle {
  center = {
    justifyContent: 'center',
    alignItems: 'center',
  }

  // Size
  size = (width, height) => ({
    width,
    height: height || width,
  })
  circle(value) {
    return {
      ...this.size(value),
      borderRadius: value / 2,
    }
  }

  // Font Styles
  textColor = (size, color) => ({
    fontSize: size || 14,
    color,
  })
  textColorBold = (size, color) => ({
    fontSize: size || 14,
    fontWeight: 'bold',
    color,
  })
}
