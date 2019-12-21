import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from 'components/Card/Card';
import RoundButton from 'components/Buttons/RoundButton';
import axios from 'axios';

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
  if(a.is_online > b.is_online) return -1;
  return 1;
}

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:3004/users/0');
      setFriends(result.data.friends);
    }
    fetchData();
  }, []);

  return(
    <Wrapper>
      {
        friends ?
          friends
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
          :
          <EmptyText>No friends to show.</EmptyText>
      }
    </Wrapper>
  )
}

export default FriendsList;