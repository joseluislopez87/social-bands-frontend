import React from 'react';

import Styled from './NavBar.styles';

import NavBarItem from './NavBarItem';

export default function NavBar() {
  return(
    <Styled.NavBar aria-label='Main navigation'>
      <NavBarItem
        exact
        to='/'
        icon='explore'
      >
        Explore
      </NavBarItem>
      <NavBarItem
        to='/messages'
        icon='messages'
      >
        Messages
      </NavBarItem>
      <NavBarItem
        to='/friends'
        icon='profile'
      >
        Friends
      </NavBarItem>
      <NavBarItem
        to='/settings'
        icon='settings'
      >
        Settings
      </NavBarItem>
    </Styled.NavBar>
  );  
}
