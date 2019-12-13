import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from 'components/Card/Card';
import {find} from 'lodash';
import {format} from 'date-fns';

import {users, profiles} from 'data';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const EmptyText = styled.div`
  color: ${({theme}) => theme.colors.inactive};
  margin: 3rem 1rem;
  text-align: center;
`;

const LatestTime = styled.div`
  color: ${({theme}) => theme.colors.inactive};
  font-size: 0.9rem;
`;

const Unreads = styled.div`
  background: ${({theme}) => theme.colors.gradient};
  border-radius: 9px;
  color: white;
  font-size: 0.9rem;
  margin-top: 0.1em;
  padding: 0.2em 0.5em;

  &:empty {
    display: none;
  }
`;

const ConversationsList = ({items}) => {
  return(
    <Wrapper>
      {
        items ?
          items.map(item => {
            // get item's user data:
            const user = find(users, {id: item.contact_user_id});
            const profile = find(profiles, {user_id: user.id})

            return(
              <Card
                key={item.id} 
                image={profile.picture}
                name={profile.display_name}
                text={item.latest_message}
                url={`/profile/${user.username}`}
                urlLabel={`Go to ${profile.display_name}'s profile`}
                childrenColumn
              >
                <LatestTime>
                  {format(item.last_message_at, 'dd/MM/yy')}
                </LatestTime>
                <Unreads>
                  {item.unreads_count > 0 && item.unreads_count}
                </Unreads>
              </Card>
            );
          })
          :
          <EmptyText>No new request.</EmptyText>
      }
    </Wrapper>
  )
}

ConversationsList.propTypes = {
  items: PropTypes.array.isRequired,
}

export default ConversationsList;