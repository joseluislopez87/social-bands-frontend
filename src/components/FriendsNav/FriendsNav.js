import React from 'react';
import styled from 'styled-components';
import {NavLink, useRouteMatch} from 'react-router-dom';

const Nav = styled.nav`
  background: white;
  border-bottom: 1px solid lightgray;
  border-radius: 0.2em 0.2em 0 0;
  display: flex;
`;

const StyledNavLink = styled(NavLink)`
  color: ${({theme}) => theme.colors.inactive};
  flex: 1;
  font-size: 0.95rem;
  padding: 1.2em 1em;
  position: relative;
  text-align: center;
  text-decoration: none;

  &.active {
    color: black;

    &:after {
      background: ${({theme}) => theme.colors.gradientRotated};
      border-radius: 4px 4px 0 0;
      bottom: 0;
      content: '';
      height: 4px;
      left: 0;
      position: absolute;
      width: 100%;
    }
  }
`;

const FriendsNav = () => {
  let {url} = useRouteMatch();

  return(
    <Nav aria-label='Secondary navigation'>
      <StyledNavLink exact to={`${url}`}>Friends</StyledNavLink>
      <StyledNavLink to={`${url}/messages`}>Messages</StyledNavLink>
      <StyledNavLink to={`${url}/requests`}>Requests</StyledNavLink>
    </Nav>
  );
}

export default FriendsNav;