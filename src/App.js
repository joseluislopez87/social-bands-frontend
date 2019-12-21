import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Switch, Route, withRouter } from 'react-router-dom';

import theme from 'themes/theme.default';

import Header from 'components/Header/Header';
import NavBar from 'components/NavBar/NavBar';

import Explore from 'containers/Explore/Explore';
import Friends from 'containers/Friends/Friends';
import ProfileEdit from 'containers/Profile/ProfileEdit';
import Profile from 'containers/Profile/Profile';
import ProfileHeader from 'containers/Profile/ProfileHeader';
import Settings from 'containers/Settings/Settings';
import Messages from 'containers/Messages/Messages';

import Splash from 'containers/Login/Splash';

const AppContainer = styled.div`
  background: ${props => props.theme.appBackground};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 800px;
  min-height: 100vh;
`;

const Content = styled.main`
  box-sizing: border-box;
  display: ${({showNotifications}) => showNotifications ? 'none' : 'flex'};
  flex: 1;
  flex-direction: column;
  margin: 1rem;
`;

const App = ({ history }) => {
  const [showNotifications, toggleNotifications] = useState(false);
  const [profile, setProfile] = useState({});
  const [loggedIn, setLoggedIn] = useState(true);

  history.listen(() => {
    toggleNotifications(false);
    window.scrollTo(0, 0);
  });

  return (
    <ThemeProvider theme={theme}>
      {
        loggedIn ?
          <AppContainer>
            <Header showNotifications={showNotifications} toggleNotifications={toggleNotifications}>
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
  );
}

export default withRouter(App);
