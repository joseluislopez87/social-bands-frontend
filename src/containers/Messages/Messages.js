import React from 'react';
import { useParams } from 'react-router-dom';

import Chat from 'components/Chat/Chat';
import ChatsList from 'components/Chat/ChatsList';

const Messages = () => {
  const { username } = useParams();

  return(
    username ? <Chat username={username} /> : <ChatsList />
  )
}

export default Messages;