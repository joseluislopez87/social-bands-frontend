import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import timeFormat from 'utils/date';

import MessagesInfos from 'components/Messages/MessagesInfos';
import Message from 'components/Messages/Message';

import { messages as importedMessages, current_user } from 'data';

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
  const [messages, setMessages] = useState([]);
  const messagesEnd = useRef(null);

  const scrollToBottom = () => {
    messagesEnd.current.scrollIntoView();
  }

  useEffect(() => {
    setMessages(importedMessages);
  }, [setMessages]);

  useEffect(scrollToBottom, [messages]);

  return(
    <Wrapper>
      <MessagesInfos />
      <MessagesTrail>
        {
          !messages.length ?
          'No messages to show'
          :
          messages
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