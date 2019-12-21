import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Bio from 'components/Profile/Bio';
import MusicStyle from 'components/Profile/MusicStyle';
import ProfileSection from 'components/Profile/ProfileSection';
import ProfileInstrument from 'components/Profile/ProfileInstrument';

const Location = styled.div`
  font-size: 0.9rem;
  margin-top: 10%;
  text-align: center;
`;

const descProficiency = (a, b) => {
  if(a.proficiency > b.proficiency) return -1;
  return 1;
}

const Profile = ({ profile, setProfile }) => {
  let { username } = useParams();

  useEffect(() => {
    const fetchProfile = async () => {
      const result = await axios(`http://localhost:3004/users?username=${username}`);
      setProfile(result.data[0].profile);
    }
    fetchProfile();
  }, [setProfile, username])

  return(
    profile ?
      <>
      <Location>{profile.location}</Location>
      <Bio>{profile.bio ? profile.bio : ''}</Bio>
      <ProfileSection title='Instruments'>
        {
          profile.instruments ?
            profile.instruments
              .sort((a, b) => descProficiency(a, b))
              .map(instrument => {
                return(
                  <ProfileInstrument
                    key={instrument.id}
                    instrument_id={instrument.instrument_id}
                    proficiency={instrument.proficiency}
                  />
                );
              })
          :
          ''
        }
      </ProfileSection>
      <ProfileSection title='Styles'>
        <MusicStyle value='blues'>blues</MusicStyle>
      </ProfileSection>
    </>
    :
    <h4>ok</h4>
  );
}

export default Profile;