import React from 'react';
import { Switch, Route } from 'react-router-dom';

import FriendsNav from 'components/FriendsNav';
import { Friends as FriendsList } from 'components/Friends';
import Requests from 'components/Requests';

const Friends = () => {
  return(
    <>
      <FriendsNav />
      <Switch>
        <Route exact path='/friends'>
          <FriendsList />
        </Route>
        <Route exact path='/friends/requests'>
          <Requests
            emptyText='No friends to show.'
          />
        </Route>
      </Switch>
    </>
  );
}

export default Friends;