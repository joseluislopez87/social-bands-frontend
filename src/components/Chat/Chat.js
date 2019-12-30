import React, { useEffect, useRef, useState } from 'react';
import timeFormat from 'utils/date';
import axios from 'axios';

import Styled from './Chat.styles';

import MessagesInfos from 'components/Messages/MessagesInfos';
import Message from 'components/Messages/Message';
import Loading from 'components/Loading';

export default function Chat({ username }) {
  const [isLoading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState({});
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const trail = useRef(null);
  const latestMessage = useRef(null);

  useEffect(() => {
    async function fetchMessages() {
      axios.get(`http://localhost:3004/messages/?friend.username=${username}`)
        .then(response => {
          setMessages(response.data[0].messages);
          setProfile(response.data[0].friend.profile);
          setIsLoading(false);
          latestMessage.current.scrollIntoView();
        })
        .catch(error => console.log(error));
    }
    fetchMessages();
  }, [username]);

  function handleSubmit(e) {
    e.preventDefault();
  
    const time = new Date().toISOString();

    const newMessageObject = {
      id: messages.length,
      created_at: time,
      sent: true,
      content: newMessage,
    }

    setNewMessage('');
    setMessages([...messages, newMessageObject]);
  }

  useEffect(() => {
    if(latestMessage.current !== null) {
      latestMessage.current.scrollIntoView();
    }
  }, [messages]);

  function handleChange(e) {
    setNewMessage(e.target.value);
  }

  return(
    !isLoading ?
      <Styled.Wrapper>
        <MessagesInfos friend={profile} />
        <Styled.MessagesTrail ref={trail}>
          {
            !messages.length ?
            'No messages to show'
            :
            messages
              .sort((a, b) => a.created_at > b.created_at)
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
        </Styled.MessagesTrail>
        <form onSubmit={handleSubmit}>
          <Styled.MessageInput placeholder='Type in your message' value={newMessage} onChange={e => handleChange(e)} />
        </form>
      </Styled.Wrapper>
    :
      <Loading />
  )
}
