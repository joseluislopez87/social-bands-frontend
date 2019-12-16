import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { notifications } from 'data';

import NotificationsIcon from 'components/Notifications/NotificationsIcon';
import NotificationsTrail from 'components/Notifications/NotificationsTrail';
import withBadge from 'hoc/withBadge';

const StyledHeader = styled.header`
  background: ${({theme}) => theme.headerBackground};
  border-radius: ${({showNotifications}) => showNotifications ? '0' : '0 0 1rem 1rem'};
  color: white;
  display: flex;
  flex: ${({showNotifications}) => showNotifications ? '1' : '0'};
  flex-direction: column;
  min-height: ${({showNotifications}) => showNotifications ? '100%' : '0'};
  position: relative;
  width: 100%;
  z-index: ${({showNotifications}) => showNotifications ? '1000' : 'auto'};
`;

const HeaderNav = styled.nav`
  align-items: center;
  display: flex;
  padding: 0.5rem;
  width: 100%;
`;

const LogoLink = styled(Link)`
  display: flex;
  padding: 0.5rem;
`;

const Logo = styled.img`
  height: 25px;
  width: auto;
`;

const StyledBadge = styled.div`
  margin-left: auto;
`;

const ChildrenWrapper = styled.div`
  display: flex;
  padding: 0.5rem 1rem 1rem 1rem;
  width: 100%;

  &:empty {
    display: none;
  }
`;

const BadgedNotifications = withBadge(
  notifications.length,
  StyledBadge)
  (NotificationsIcon);

const Header = ({showNotifications, toggleNotifications, children}) => {
  return(
  <StyledHeader role='banner' showNotifications={showNotifications}>
    <HeaderNav>
      <LogoLink to='/' aria-label='Go to Home'>
        <Logo src='/logo/app.svg' alt='' />
      </LogoLink>
      <BadgedNotifications
        handleClick={() => toggleNotifications(!showNotifications)}
      />
    </HeaderNav>
    <ChildrenWrapper>
      {
        showNotifications ?
          <NotificationsTrail
            items={notifications}
          />
        :
          children
      }
    </ChildrenWrapper>
  </StyledHeader>);
}

Header.propTypes = {
  children: PropTypes.node,
}

export default Header;