import React from 'react';
import Card from 'components/Card/Card';
import timeFormat from 'utils/date';
import Fetcher from 'utils/Fetcher';

import { Wrapper, InfosWrapper, LatestTime, Unreads, EmptyText } from './ChatsList.styles';

export default function ChatsList() {
  return(
    <Fetcher request='http://localhost:3004/messages'>
      { ({ data }) => (
        <Wrapper>
        {
          data ?
            data.map(conversation => {
  
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
      ) }
    </Fetcher>
  )
}
