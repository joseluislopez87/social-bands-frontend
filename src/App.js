import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Switch, Route, withRouter } from 'react-router-dom';
import { SWRConfig } from 'swr';
import axios from 'axios';

import theme from 'themes/theme.default';
import { AppContainer, Content } from './App.styles';

import Header from 'components/Header';
import NavBar from 'components/NavBar';

import Explore from 'containers/Explore';
import Friends from 'containers/Friends';
import { Profile, ProfileEdit, ProfileHeader } from 'containers/Profile';
import ExploreHeader from 'containers/Explore/ExploreHeader';
import Settings from 'containers/Settings';
import Messages from 'containers/Messages';

import { Splash } from 'containers/Login';


const App = ({ history }) => {
  const [showNotifications, toggleNotifications] = useState(false);
  const [profile, setProfile] = useState({});
  const [loggedIn, setLoggedIn] = useState(true);

  history.listen(() => {
    toggleNotifications(false);
    window.scrollTo(0, 0);
  });

  return (
    <SWRConfig value={{
      fetcher: url => axios(url).then(response => response)
    }}>
      <ThemeProvider theme={theme}>
        {
          loggedIn ?
            <AppContainer>
              <Header showNotifications={showNotifications} toggleNotifications={toggleNotifications}>
                <Route
                  exact
                  path='/'
                  render={() => <ExploreHeader />}
                />
                <Route
                  path='/profile'
                  render={() => <ProfileHeader profile={profile} />}
                />
              </Header>
              <Content showNotifications={showNotifications}>
                
                <Switch>
                  <Route exact path='/' component={Explore} />
                  <Route path='/friends' component={Friends} />
                  <Route path='/messages/:username?' component={Messages} />
                  <Route exact path='/profile/edit' component={ProfileEdit} />
                  <Route
                    path='/profile/:username?'
                    render={
                      (props) => <Profile {...props} profile={profile} setProfile={setProfile} />
                    }
                  />
                  <Route path='/settings' component={Settings} />
                </Switch>

              </Content>
              <NavBar />
            </AppContainer>
          :
          <Splash handleLogin={() => setLoggedIn(true)} />
        }
      </ThemeProvider>
    </SWRConfig>
  );
}

export default withRouter(App);
