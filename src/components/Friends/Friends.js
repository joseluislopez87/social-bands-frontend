import React from 'react';

import Styled from './Friends.styles';

import Fetcher from 'utils/Fetcher';

import Card from 'components/Card/Card';
import RoundButton from 'components/Buttons/RoundButton';

const sortByStatus = (a, b) => {
  if(a.is_online > b.is_online) return -1;
  return 1;
}

export default function Friends() {

  return(
    <Fetcher request='http://localhost:3004/users/0'>
      { ({ data }) => (
        <Styled.Friends>
          {
            data.friends
              .sort((a, b) => sortByStatus(a, b))
              .map(friend => {
                return(
                  <Card
                    key={friend.id} 
                    image={friend.profile.picture}
                    title={friend.profile.display_name}
                    text={friend.is_online ? 'Online' : 'Offline'}
                    url={`/profile/${friend.username}`}
                    urlLabel={`Go to ${friend.profile.display_name}'s profile`}
                    roundImg
                  >
                    <RoundButton
                      to={`/messages/${friend.username}`}
                      icon='/icons/chat.svg'
                    >
                      {`Open chat conversation with ${friend.profile.display_name}`}
                    </RoundButton>
                  </Card>
                );
              })
          }
        </Styled.Friends>
      ) }
    </Fetcher>
  )
}
