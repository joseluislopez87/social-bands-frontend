import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { rem } from 'polished';

const Wrapper = styled.nav`
  display: flex;
  margin-bottom: 1em;
`;

const Nav = styled(NavLink)`
  color: white;
  font-size: ${rem(20)};
  font-weight: 600;
  margin-right: 0.5em;
  text-decoration: none;
  opacity: 0.7;

  &.active {
    opacity: 1;
  }
`;

export default function SplashNav() {
  return(
    <Wrapper>
      <Nav exact to='/'>Login</Nav>
      <Nav to='/signup'>Sign Up</Nav>
    </Wrapper>
  );
}