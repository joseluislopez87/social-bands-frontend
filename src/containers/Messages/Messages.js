import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import timeFormat from 'utils/date';

import MessagesInfos from 'components/Messages/MessagesInfos';
import Message from 'components/Messages/Message';

import { messages, current_user } from 'data';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const MessagesTrail = styled.div`
  height: calc(100vh - 224px - 3rem);
  overflow: scroll;
`;

const MessageInput = styled.input`
  border: 1px solid #dadada;
  border-radius: 1.5em;
  margin-top: 0.5em;
  padding: 0.75em 1em;
  width: 100%;
`;

const Messages = () => {
  const messagesEnd = useRef(null);

  const scrollToBottom = () => {
    messagesEnd.current.scrollIntoView();
  }

  useEffect(scrollToBottom, []);

  return(
    <Wrapper>
      <MessagesInfos />
      <MessagesTrail>
        {
          messages
            .sort((a, b) => a.sent_at > b.sent_at ? 1 : -1)
            .map(message =>
              <Message
                key={message.id}
                sent_at={timeFormat(message.sent_at)}
                self={current_user.id === message.sender_user_id}
              >
                {message.content}
              </Message>
            )
        }
        <div ref={messagesEnd} />
      </MessagesTrail>
      <form>
        <MessageInput placeholder='Type in your message' />
      </form>
    </Wrapper>
  )
}

export default Messages;