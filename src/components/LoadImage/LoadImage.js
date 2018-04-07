import React from 'react'
import { string, object } from 'prop-types'
import Image from 'react-lazy-image'
import IMAGE_NOT_FOUND from '../../assets/images/img-not-found.png'

const LoadImage = ({ url, style }) => (
  <Image defaultSource={IMAGE_NOT_FOUND} source={url} style={style} />
)

LoadImage.propTypes = {
  url: string,
  style: object,
}

LoadImage.defaultProps = {
  url: '',
  style: {},
}

export default LoadImage
