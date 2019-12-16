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
  font-size: ${rem(16)};
  padding: ${em(8)} ${em(14)};

  &:disabled {
    opacity: 0.6;
  }
`;

const Button = ({handleClick, secondary, children}) => {
  return(
    <Wrapper
      secondary={secondary}
      onClick={handleClick}
    >
      {children}
    </Wrapper>
  )
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
}

export default Button;