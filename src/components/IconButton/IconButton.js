import React from 'react'
import { Icon } from 'antd-mobile'
import { func, oneOf, string, objectOf, any, number } from 'prop-types'
import { View } from '../Native'
import styles from './styles'

const IconButton = ({ onPress, icon, type, color, style, size, iconSize }) => {
  return (
    <View 
      onPress={onPress} 
      style={[styles.btnView(type, color, size), style]}
    >
      <Icon type={icon} size={iconSize} style={styles.btnTextIcon(color)} />
    </View>
  )
}

IconButton.propTypes = {
  onPress: func.isRequired,
  type: oneOf(['primary', 'flat', 'outline']),
  color: string,
  style: objectOf(any),
  icon: string,
  size: number,
  iconSize: oneOf(['xxs', 'xs', 'sm', 'md', 'lg'])
}

IconButton.defaultProps = {
  type: 'primary',
  color: 'default',
  style: {},
  icon: '',
  size: 60,
  iconSize: 'md',
}


export default IconButton
