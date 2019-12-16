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

const NotificationsTrail = ({items}) => {
  return(
    <>
      <Trail>
        {
          items.length > 0 ?
            items
            .sort((a, b) => b.timestamp - a.timestamp)
            .map(item => {
              return(
                <Card
                  key={item.id} 
                  image={item.image}
                  name={item.label}
                  text={timeFormat(item.timestamp)}
                  url={item.action_url}
                  urlLabel={item.action_label}
                  alternateLook
                  condensed
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
  items: PropTypes.array.isRequired,
}

export default NotificationsTrail;