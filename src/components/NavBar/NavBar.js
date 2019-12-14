import React from 'react';
import styled from 'styled-components';

import NavBarItem from './NavBarItem';

const Nav = styled.nav`
  background: ${({theme}) => theme.navBarBackground};
  bottom: 0;
  box-shadow: 0 0 6px 6px rgba(0,0,0,.03);
  display: flex;
  height: 70px;
  justify-content: space-between;
  left: 0;
  padding: 0 0.5rem;
  position: sticky;
  right: 0;
  z-index: 2000;
`;

const NavBar = () => (
  <Nav aria-label='Main navigation'>
    <NavBarItem
      to='/explore'
      icon='explore'
    >
      Explore
    </NavBarItem>
    <NavBarItem
      to='/friends'
      icon='messages'
    >
      Friends
    </NavBarItem>
    <NavBarItem
      to='/profile'
      icon='profile'
    >
      Profile
    </NavBarItem>
    <NavBarItem
      to='/settings'
      icon='settings'
    >
      Settings
    </NavBarItem>
  </Nav>
);

export default NavBar;