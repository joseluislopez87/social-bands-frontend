import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from 'components/Card/Card';
import RoundButton from 'components/Buttons/RoundButton';
import {find} from 'lodash';

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

const sortByStatus = (a, b) => {
  const a_infos = find(users, {id: a.friend_user_id});
  const b_infos = find(users, {id: b.friend_user_id});

  if(a_infos.is_online > b_infos.is_online) return -1;
  return 1;
}

const FriendsList = ({items}) => {
  return(
    <Wrapper>
      {
        items ?
          items
            .sort((a, b) => sortByStatus(a, b))
            .map(item => {
              // get item's user data:
              const user = find(users, {id: item.friend_user_id});
              const profile = find(profiles, {user_id: user.id})

              return(
                <Card
                  key={item.id} 
                  image={profile.picture}
                  name={profile.display_name}
                  text={user.is_online ? 'Online' : 'Offline'}
                  url={`/profile/${user.username}`}
                  urlLabel={`Go to ${profile.display_name}'s profile`}
                >
                  <RoundButton
                    to={`friends/messages/${user.username}`}
                    icon='/icons/chat.svg'
                  >
                    {`Open chat conversation with ${profile.display_name}`}
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