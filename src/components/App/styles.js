import { GlobalStyle } from 'Styles/index'

class Style extends GlobalStyle {
  containerMobile = {
    width: '100vw',
    height: '100vh',
  }

  btnFloating = {
    position: 'absolute',
    bottom: 70,
    right: 15,
  }
}

export default new Style()