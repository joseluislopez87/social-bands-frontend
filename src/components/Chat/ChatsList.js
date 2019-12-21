import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from 'components/Card/Card';
import axios from 'axios';
import timeFormat from 'utils/date';

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

const InfosWrapper = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
`;

export default function ChatsList() {
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const fetchConversations = async () => {
      const result = await axios('http://localhost:3004/messages');
      setConversations(result.data);
    }
    fetchConversations();
  }, []);

  return(
    <Wrapper>
      {
        conversations ?
          conversations.map(conversation => {

            return(
              <Card
                key={conversation.id} 
                image={conversation.friend.profile.picture}
                title={conversation.friend.profile.display_name}
                text={conversation.latest_preview}
                url={`/messages/${conversation.friend.username}`}
                urlLabel={`Open conversation with ${conversation.friend.profile.display_name}`}
                roundImg
                displayed='condensed'
              >
                <InfosWrapper>
                  <LatestTime>
                    {timeFormat(conversation.latest_at, 'dd/MM/yy')}
                  </LatestTime>
                  <Unreads>
                    {conversation.unreads > 0 && conversation.unreads}
                  </Unreads>
                </InfosWrapper>
              </Card>
            );
          })
          :
          <EmptyText>No new request.</EmptyText>
      }
    </Wrapper>
  )
}
