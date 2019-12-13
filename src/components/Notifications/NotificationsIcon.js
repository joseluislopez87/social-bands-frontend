import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background: 0;
  border: 0;
  margin-left: auto;
  padding: 0.3rem;
`;

const Icon = styled.img`
  height: 25px;
  width: auto;
`;

const NotificationsIcon = ({handleClick}) => (
  <Button
    aria-label='Display notifications'
    onClick={handleClick}
  >
    <Icon
      src='/icons/notification-bell.svg'
      alt=''
    />
  </Button>
)

NotificationsIcon.propTypes = {
  handleClick: PropTypes.func.isRequired,
}

export default NotificationsIcon;