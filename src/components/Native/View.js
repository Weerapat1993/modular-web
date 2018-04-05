import React from 'react'
import { oneOfType, object, func, element, node } from 'prop-types'

const styles = {
  viewStyle: (style) => ({
    display: 'flex',
    flexDirection: 'column',
    ...style,
  }),
}

const View = ({ children, style }) => (
  <div style={styles.viewStyle(style)}>{children}</div>
)

View.propTypes = {
  children: oneOfType([
    func,
    element,
    node,
  ]),
  style: object
}

View.defaultProps = {
  children: null,
  style: {}
}

export default View
