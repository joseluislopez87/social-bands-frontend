import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem, em } from 'polished';

const paddings = {
  default: `${em(8)}`,
  small: `${em(8)} ${em(14)}`,
  large: `${em(14)}`,
}

const Wrapper = styled.button`
  background: ${({secondary}) =>
    secondary ?
      '#f1e9e9' :
      '#ff512f'
  };
  border: 0;
  border-radius: ${em(4)};
  color: ${({secondary}) => secondary ? 'black' : 'white' };
  font-size: ${rem(15)};
  padding: ${props => paddings[props.size]};
  width: ${props => props.fullWidth ? '100%' : 'auto'};

  &:disabled {
    opacity: 0.6;
  }
`;

const Button = ({
  handleClick,
  secondary = false,
  fullWidth = false,
  size = 'default',
  children
}) => {
  return(
    <Wrapper
      secondary={secondary}
      onClick={handleClick}
      size={size}
      fullWidth={fullWidth}
    >
      {children}
    </Wrapper>
  )
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  secondary: PropTypes.bool,
  size: PropTypes.string,
  children: PropTypes.string.isRequired,
}

export default Button;