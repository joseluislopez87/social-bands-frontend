import React from 'react';
import PropTypes from 'prop-types';

import Styled from './Buttons.styles';

export default function Button({
  handleClick,
  appearance= 'default',
  fullWidth = false,
  size = 'default',
  children,
  ...props
}) {
  return(
    <Styled.Button
      appearance={appearance}
      onClick={handleClick}
      size={size}
      fullWidth={fullWidth}
      {...props}
    >
      {children}
    </Styled.Button>
  )
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  secondary: PropTypes.bool,
  size: PropTypes.string,
  children: PropTypes.string.isRequired,
}
