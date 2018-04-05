import React from 'react'
import { bool } from 'prop-types'
import { withSizes } from 'react-sizes'
import AppMobile from './AppMobile'
import AppDesktop from './AppDesktop'

const AppContainer = (props) => (
  props.isDesktop ? 
    <AppDesktop {...props} />
  : 
    <AppMobile {...props} />
)

AppContainer.propTypes = {
  isDesktop: bool.isRequired,
}

const mapSizesToProps = ({ width, height }) => ({
  isMobile: width < 480,
  isDesktop: width > 1024,
  dimenstion: {
    width, 
    height,
  }
})

export const App = withSizes(mapSizesToProps)(AppContainer)
