import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.button`
  background: ${({secondary, theme}) => secondary ? 'lightgray' : theme.colors.primary};
  border: 0;
  border-radius: 0.4em;
  color: ${({secondary}) => secondary ? 'black' : 'white' };
  font-size: 1rem;
  padding: 0.5em 0.6rem;
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