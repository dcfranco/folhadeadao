import React, { memo } from 'react'
import PropTypes from 'prop-types'
import Images from 'assets/images'

const AVAILABLE_IMAGES = {
  ...Images
}

const Image = memo(((props) => {
  const { src, alt, className, maxHeight, maxWidth } = props
  if (!src) {
    return null
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={{
        width: '100%',
        height: '100%',
        maxWidth,
        maxHeight,
        overflowX: 'hidden'
      }}
    />
  )
}))

Image.propTypes = {
  src: PropTypes.any.isRequired,
  className: PropTypes.string,
  maxWidth: PropTypes.string,
  maxHeight: PropTypes.string,
  alt: PropTypes.string,
}
Image.defaultProps = {
  className: '',
  maxWidth: null,
  maxHeight: 'auto',
  alt: 'Image'
}
Image.AVAILABLE_IMAGES = AVAILABLE_IMAGES

export default Image
