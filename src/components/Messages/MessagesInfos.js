import React from 'react';
import Card from 'components/Card/Card';
import Dropdown from 'components/Dropdown';

import Styled from './MessagesInfos.styles';

export default function MessagesInfos({ friend }) {
  return(
    friend.hasOwnProperty('id') &&
      <Styled.Wrapper>
        <Styled.Return to='/messages' />
        <Styled.Infos>
          <Card
            image={friend.picture}
            title={friend.display_name}
            roundImg
            displayed='compressed'
            url='#'
            urlLabel={`See ${friend.display_name}'s profile`}
          />
        </Styled.Infos>
        <Styled.Actions>
          <Dropdown />
        </Styled.Actions>
      </Styled.Wrapper>
  )
}
