import React from 'react';
import PropTypes from 'prop-types';

import Styled from './NotificationsIcon.styles';

export default function NotificationsIcon({handleClick}) {
  return(
    <Styled.Button
      aria-label='Display notifications'
      onClick={handleClick}
    >
      <Styled.Icon
        src='/icons/notification-bell.svg'
        alt=''
      />
    </Styled.Button>
  )
}

NotificationsIcon.propTypes = {
  handleClick: PropTypes.func.isRequired,
}
