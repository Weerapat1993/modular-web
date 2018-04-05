import React from 'react'
import { oneOfType, object, array, func, element, node } from 'prop-types'

const styles = {
  viewStyle: (style) => {
    const defaultView = {
      display: 'flex',
      flexDirection: 'column',
    }
    if(Array.isArray(style)) {
      let newView = defaultView
      style.forEach(styleItem => {
        newView = {
          ...newView,
          ...styleItem
        }
      })
      return newView
    }
    return {
      display: 'flex',
      flexDirection: 'column',
      ...style,
    }
  },
}

const View = ({ children, style, onPress }) => (
  <div onClick={onPress} style={styles.viewStyle(style)}>{children}</div>
)

View.propTypes = {
  children: oneOfType([
    func,
    element,
    node,
  ]),
  style: oneOfType([
    array,
    object,
  ]),
  onPress: func,
}

View.defaultProps = {
  children: null,
  style: {},
  onPress: () => null
}

export default View
