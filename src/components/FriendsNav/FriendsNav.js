import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import Styled from './FriendsNav.styles';

export default function FriendsNav() {
  let { url } = useRouteMatch();

  return(
    <Styled.Nav aria-label='Secondary navigation'>
      <Styled.NavLink exact to={`${url}`}>
        <FormattedMessage id='components.FriendsNav.friends' />
      </Styled.NavLink>
      <Styled.NavLink to={`${url}/requests`}>
      <FormattedMessage id='components.FriendsNav.requests' />
      </Styled.NavLink>
    </Styled.Nav>
  );
}
