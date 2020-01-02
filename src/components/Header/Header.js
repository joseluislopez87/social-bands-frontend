import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Styled from './Header.styles';

import NotificationsIcon from 'components/Notifications/NotificationsIcon';
import NotificationsTrail from 'components/Notifications/NotificationsTrail';
import withBadge from 'hoc/withBadge';
import useSWR from 'swr';

export default function Header({ showNotifications, toggleNotifications, children }) {
  const { data } = useSWR('http://localhost:3004/notifications?for_user_id=0&_sort=created_at&_order=desc');

  const [notifications, setNotifications] = useState([]);

  const BadgedNotifications = withBadge(
    notifications.length,
    Styled.Badge)
    (NotificationsIcon);

  useEffect(() => {
    if (data) setNotifications(data.data);
  }, [data])

  return(
  <Styled.Header role='banner' showNotifications={showNotifications}>
    <Styled.HeaderNav>
      <Styled.LogoLink to='/' aria-label='Go to Home'>
        <Styled.Logo src='/logo/app.svg' alt='' />
      </Styled.LogoLink>
      <BadgedNotifications
        handleClick={() => toggleNotifications(!showNotifications)}
      />
    </Styled.HeaderNav>
    <Styled.Children>
      {
        showNotifications ?
          <NotificationsTrail
            notifications={notifications}
          />
        :
          children
      }
    </Styled.Children>
  </Styled.Header>);
}

Header.propTypes = {
  children: PropTypes.node,
}
