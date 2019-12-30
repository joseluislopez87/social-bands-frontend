import React from 'react';
import { FormattedMessage } from 'react-intl';

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
        <FormattedMessage id='NavBar.explore' />
      </NavBarItem>
      <NavBarItem
        to='/messages'
        icon='messages'
      >
        <FormattedMessage id='NavBar.messages' />
      </NavBarItem>
      <NavBarItem
        to='/friends'
        icon='profile'
      >
        <FormattedMessage id='NavBar.friends' />
      </NavBarItem>
      <NavBarItem
        to='/settings'
        icon='settings'
      >
        <FormattedMessage id='NavBar.settings' />
      </NavBarItem>
    </Styled.NavBar>
  );  
}
