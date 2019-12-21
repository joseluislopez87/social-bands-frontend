import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import timeFormat from 'utils/date';
import axios from 'axios';

// import MessagesInfos from 'components/Messages/MessagesInfos';
import Message from 'components/Messages/Message';

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

function Chat({ username }) {
  const [isLoading, setIsLoading] = useState(true);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      axios.get(`http://localhost:3004/messages/?friend.username=${username}`)
        .then(response => {
          setIsLoading(false);
          setMessages(response.data[0].messages);
        })
        .catch(error => console.log(error));
    }
    fetchMessages();
  }, [username]);

  return(
    !isLoading &&
      <Wrapper>
        <MessagesTrail>
          {
            !messages.length ?
            'No messages to show'
            :
            messages
              .map(message =>
                <Message
                  key={message.id}
                  sent_at={timeFormat(message.created_at)}
                  self={message.sent}
                >
                  {message.content}
                </Message>
              )
          }
        </MessagesTrail>
        <form>
          <MessageInput placeholder='Type in your message' />
        </form>
      </Wrapper>
  )
}

export default Chat;