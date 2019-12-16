import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem, em, darken } from 'polished';

const Wrapper = styled.button`
  background: ${({secondary}) =>
    secondary ?
      '#f1e9e9' :
      `linear-gradient(#ff512f, ${darken(0.1, '#ff512f')})`
  };
  border: 0;
  border-radius: ${em(4)};
  color: ${({secondary}) => secondary ? 'black' : 'white' };
  font-size: ${rem(15)};
  padding: ${props => props.condensed ?
    `${em(8)}`
    :
    `${em(8)} ${em(14)}`
  };

  &:disabled {
    opacity: 0.6;
  }
`;

const Button = ({
  handleClick,
  secondary = false,
  condensed = false,
  children
}) => {
  return(
    <Wrapper
      secondary={secondary}
      condensed={condensed}
      onClick={handleClick}
    >
      {children}
    </Wrapper>
  )
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  secondary: PropTypes.bool,
  condensed: PropTypes.bool,
  children: PropTypes.string.isRequired,
}

export default Button;