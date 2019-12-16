import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FriendsNav from 'components/FriendsNav/FriendsNav';

import { friends, conversations, requests } from 'data';

import FriendsList from 'components/FriendsList/FriendsList';
import ConversationsList from 'components/ConversationsList/ConversationsList';
import RequestsList from 'components/RequestsList/RequestsList';

const Friends = () => {
  return(
    <>
      <FriendsNav />
      <Switch>
        <Route exact path='/friends'>
          <FriendsList
            items={friends}
          />
        </Route>
        <Route exact path='/friends/messages'>
          <ConversationsList
            items={conversations}
          />
        </Route>
        <Route exact path='/friends/requests'>
          <RequestsList
            items={requests}
            emptyText='No friends to show.'
          />
        </Route>
      </Switch>
    </>
  );
}

export default Friends;