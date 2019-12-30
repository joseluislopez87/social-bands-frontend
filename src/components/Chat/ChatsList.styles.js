import styled from 'styled-components';

const ChatsList = styled.div`
  display: flex;
  flex-direction: column;
`;

const LatestAt = styled.div`
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

const Infos = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
`;

const Styled = {
  ChatsList,
  LatestAt,
  Unreads,
  Infos,
}

export default Styled;
