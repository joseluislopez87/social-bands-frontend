import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Name = styled.div`
  color: white;
  font-size: ${rem(20)};
  font-weight: 600;
  margin-bottom: 0.5em;
  height: 25px;
  text-align: center;
`;

const ActionsWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
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
        <Picture src={profile.picture} alt='' />
      </ActionsWrapper>
    </Wrapper>
  )
}

export default ProfileHeader;