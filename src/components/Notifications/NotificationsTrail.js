import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from 'components/Card/Card';
import timeFormat from 'utils/date';

const Trail = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  & > * + * {
    margin-top: 0.5em;
  }
`;

const NotificationsTrail = ({ notifications }) => {
  return(
    <>
      <Trail>
        {
          notifications.length > 0 ?
            notifications
              .map(notification => {
                return(
                  <Card
                    key={notification.id} 
                    image={notification.image}
                    title={notification.title}
                    text={timeFormat(notification.created_at)}
                    url={notification.action_link}
                    urlLabel={notification.action_label}
                    rounded
                    displayed='condensed'
                  />
                )
            })
          :
          <h4>No notifications to show.</h4>
        }
      </Trail>
    </>
  )
}

NotificationsTrail.propTypes = {
  notifications: PropTypes.array.isRequired,
}

export default NotificationsTrail;