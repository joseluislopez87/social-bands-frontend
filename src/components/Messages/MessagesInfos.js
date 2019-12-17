import React from 'react';
import styled from 'styled-components';
import Card from 'components/Card/Card';

const Wrapper = styled.div`
  align-items: center;
  background: white;
  border-radius: 0.2em;
  display: flex;
  height: 50px;
  margin-bottom: 0.5em;
  padding: 0.5em;
`;

const Return = styled.a`
  
`;

const Infos = styled.div`
  flex: 1;
`;

const Actions = styled.div``;

export default function MessagesInfos() {
  return(
    <Wrapper>
      <Return>
        return
      </Return>
      <Infos>
        <Card
          image='https://placehold.it/200x200'
          title='Amanda'
          roundImg
          displayed='compressed'
        />
      </Infos>
      <Actions>
        ...
      </Actions>
    </Wrapper>
  )
}