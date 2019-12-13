import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from 'components/Card/Card';
import RoundButton from 'components/Buttons/RoundButton';
import {find} from 'lodash';

import {users} from 'data';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const EmptyText = styled.div`
  color: ${({theme}) => theme.colors.inactive};
  margin: 3rem 1rem;
  text-align: center;
`;

const FriendsList = ({items}) => {
  return(
    <Wrapper>
      {
        items ?
          items.map(item => {
            // get item's user data:
            const user = find(users, {id: item.friend_id});

            return(
              <Card
                key={item.id} 
                image={user.picture}
                name={user.display_name}
                text={user.online ? 'Online' : 'Offline'}
                url={`/profile/${user.id}`}
                urlLabel={`Go to ${user.display_name}'s profile`}
              >
                <RoundButton
                  to={`friends/messages/${user.id}`}
                  icon='/icons/chat.svg'
                >
                  {`Open chat conversation with ${user.name}`}
                </RoundButton>
              </Card>
            );
          })
          :
          <EmptyText>No friends to show.</EmptyText>
      }
    </Wrapper>
  )
}

FriendsList.propTypes = {
  items: PropTypes.array.isRequired,
}

export default FriendsList;