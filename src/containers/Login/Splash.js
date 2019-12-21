import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { cover } from 'polished';
import SplashNav from './SplashNav';

import Login from './Login';

const Wrapper = styled.div`
  background-image: url('images/background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  height: 100vh;
`;

const Overlay = styled.div`
  ${cover()};
  background-image: ${({theme}) => theme.colors.gradient};
  opacity: 0.85;
`;

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  z-index: 100;
`;

const Logo = styled.img`
  margin-bottom: 3rem;
  width: 140px;
`;

const ActionWrapper = styled.div`
  max-width: 400px;
  min-width: 200px;
  width: 50%;
`;

export default function Splash({ handleLogin }) {
  return(
    <Wrapper>
      <Overlay />
      <Content>
        <Logo src='logo/full.svg' alt='Unison logo' />

        <ActionWrapper>
          <SplashNav />
          <Switch>
            <Route exact path='/' render={() => <Login handleLogin={handleLogin} />} />
            <Route path='/signup' component={() => <span>Sign Up</span>} />
            <Route path='/password_recovery' component={() => <span>Recover password</span>} />
          </Switch>
        </ActionWrapper>
      </Content>
    </Wrapper>
  )
}