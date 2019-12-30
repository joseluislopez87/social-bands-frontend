import React from 'react';
import PropTypes from 'prop-types';

import Styled from './Buttons.styles';

export default function Button({
  handleClick,
  secondary = false,
  fullWidth = false,
  size = 'default',
  children
}) {
  return(
    <Styled.Button
      secondary={secondary}
      onClick={handleClick}
      size={size}
      fullWidth={fullWidth}
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
