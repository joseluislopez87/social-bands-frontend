import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const MessagesTrail = styled.div`
  height: calc(100vh - 220px - 3rem);
  padding-top: 1em;
  overflow: scroll;
`;

const MessageInput = styled.input`
  border: 1px solid #dadada;
  border-radius: 1.5em;
  margin-top: 0.5em;
  padding: 0.75em 1em;
  width: 100%;
`;

const Styled = {
  Wrapper,
  MessagesTrail,
  MessageInput,
}

export default Styled;
