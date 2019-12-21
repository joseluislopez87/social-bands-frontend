import React from 'react';
import styled from 'styled-components';
import Card from 'components/Card/Card';
import { Link } from 'react-router-dom';
import Dropdown from 'components/Dropdown/Dropdown';

const Wrapper = styled.div`
  align-items: center;
  background: white;
  border-radius: 0.2em;
  box-shadow: ${({theme}) => theme.shadows.light};
  display: flex;
  height: 50px;
  padding: 0.5em;
  z-index: 10;
`;

const Return = styled(Link)`
  display: flex;
  background: url('/icons/arrow-left.svg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 35px;
  width: 35px;
`;

const Infos = styled.div`
  flex: 1;
  margin: 0 0.5em;
`;

const Actions = styled.div`
  margin-right: 0.5em;
`;

export default function MessagesInfos({ friend }) {
  return(
    friend.hasOwnProperty('id') &&
      <Wrapper>
        <Return to='/messages' />
        <Infos>
          <Card
            image={friend.picture}
            title={friend.display_name}
            roundImg
            displayed='compressed'
          />
        </Infos>
        <Actions>
          <Dropdown />
        </Actions>
      </Wrapper>
  )
}