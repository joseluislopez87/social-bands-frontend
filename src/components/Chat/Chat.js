import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import timeFormat from 'utils/date';
import axios from 'axios';

import MessagesInfos from 'components/Messages/MessagesInfos';
import Message from 'components/Messages/Message';

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

const fadeIn = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.4; }
  100% { opacity: 1; }
`

const LoadingWrapper = styled.div`
  margin: auto;
`;

const LoadingIcon = styled.div`
  animation: 1.5s ${fadeIn} infinite ease-in-out;
  background-image: url('/icons/loading.svg');
  background-repeat: no-repeat;
  background-size: cover;
  margin: auto;
  height: 50px;
  width: 106px;
`;

const LoadingText = styled.div`
  color: #656464;
  margin-top: 1em;
  text-align: center;
`;

const scrollToRef = (containerRef, ref) => {
  containerRef.current.scrollTo(0, ref.current.offsetTop);
};

function Chat({ username }) {
  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState({});
  const [messages, setMessages] = useState([]);
  const trail = useRef(null);
  const latestMessage = useRef(null);

  useEffect(() => {
    const fetchMessages = async () => {
      axios.get(`http://localhost:3004/messages/?friend.username=${username}`)
        .then(response => {
          setMessages(response.data[0].messages);
          setProfile(response.data[0].friend.profile);
          setIsLoading(false);
          scrollToRef(trail, latestMessage);
        })
        .catch(error => console.log(error));
    }
    fetchMessages();
  }, [username]);

  return(
    !isLoading ?
      <Wrapper>
        <MessagesInfos friend={profile} />
        <MessagesTrail ref={trail}>
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
          <div ref={latestMessage}></div>
        </MessagesTrail>
        <form>
          <MessageInput placeholder='Type in your message' />
        </form>
      </Wrapper>
    :
      <LoadingWrapper>
        <LoadingIcon />
        <LoadingText>Loading...</LoadingText>
      </LoadingWrapper>
  )
}

export default Chat;