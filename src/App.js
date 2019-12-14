import React, { useState } from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import theme from 'themes/theme.default';

import Header from 'components/Header/Header';
import NavBar from 'components/NavBar/NavBar';

import Explore from 'containers/Explore/Explore';
import Friends from 'containers/Friends/Friends';
import ProfileEdit from 'containers/Profile/ProfileEdit';
import Profile from 'containers/Profile/Profile';
import ProfileHeader from 'containers/Profile/ProfileHeader';

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
  flex: 1;
  margin: 1rem;
`;

function App() {
  const [profile, setProfile] = useState({});

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppContainer>
          <Header>
            <Route
                path='/profile'
                render={() => <ProfileHeader profile={profile} />}
              />
          </Header>
          <Content role='main'>
            
            <Switch>
              <Route exact path='/explore' component={Explore} />
              <Route path='/friends' component={Friends} />
              <Route exact path='/profile/edit' component={ProfileEdit} />
              <Route
                path='/profile'
                render={
                  (props) => <Profile {...props} profile={profile} setProfile={setProfile} />
                }
              />
            </Switch>

          </Content>
          <NavBar />
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
