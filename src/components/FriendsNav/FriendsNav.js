import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import Styled from './FriendsNav.styles';

export default function FriendsNav() {
  let { url } = useRouteMatch();

  return(
    <Styled.Nav aria-label='Secondary navigation'>
      <Styled.NavLink exact to={`${url}`}>Friends</Styled.NavLink>
      <Styled.NavLink to={`${url}/requests`}>Requests</Styled.NavLink>
    </Styled.Nav>
  );
}
