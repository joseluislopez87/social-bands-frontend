import React from 'react';

import Styled from './ChatsList.styles';

import timeFormat from 'utils/date';
import Fetcher from 'utils/Fetcher';

import Card from 'components/Card/Card';

export default function ChatsList() {
  return(
    <Fetcher request='http://localhost:3004/messages'>
      { ({ data }) => (
        <Styled.ChatsList>
          { data.map(conversation => {

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
                <Styled.Infos>
                  <Styled.LatestAt>
                    {timeFormat(conversation.latest_at, 'dd/MM/yy')}
                  </Styled.LatestAt>
                  <Styled.Unreads>
                    {conversation.unreads > 0 && conversation.unreads}
                  </Styled.Unreads>
                </Styled.Infos>
              </Card>
            );

          }) }
      </Styled.ChatsList>
      ) }
    </Fetcher>
  )
}
