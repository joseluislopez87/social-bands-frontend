import React from 'react';
import styled from 'styled-components';
import RoundButton from 'components/Buttons/RoundButton';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Name = styled.div`
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5em;
  text-align: center;
`;

const ActionsWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: -15%;
  width: 70%;
`;

const Picture = styled.img`
  background: white;
  border-radius: 100%;
  box-shadow: ${({theme}) => theme.lightShadow};
  height: 100px;
  width: 100px;
`;

const ProfileHeader = ({ profile }) => {
  return(
    <Wrapper>
      <Name>{profile.display_name}</Name>
      <ActionsWrapper>
        <RoundButton to='test' icon='message'>test</RoundButton>
        <Picture src={profile.picture} alt='' />
        <RoundButton to='test' icon='message'>test</RoundButton>
      </ActionsWrapper>
    </Wrapper>
  )
}

export default ProfileHeader;