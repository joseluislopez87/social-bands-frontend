import React from 'react';
import styled from 'styled-components';
//import { useParams } from 'react-router-dom';
import { sample, find } from 'lodash';

import { users, profiles } from 'data';
import Bio from 'components/Profile/Bio';
import MusicStyle from 'components/Profile/MusicStyle';
import ProfileSection from 'components/Profile/ProfileSection';
import ProfileInstrument from 'components/Profile/ProfileInstrument';

const Location = styled.div`
  font-size: 0.9rem;
  margin-top: 10%;
  text-align: center;
`;

class Profile extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: sample(users),
      profile: {instruments: []},
    }
  }

  componentDidMount() {
    this.setState({...this.state, profile: find(profiles, {user_id: this.state.user.id})});
    this.props.setProfile(find(profiles, {user_id: this.state.user.id}));
  }

  // Sort instruments by descending proficiency:
  descProficiency(a, b) {
    if(a.proficiency > b.proficiency) return -1;
    return 1;
  }

  render() {
    return(
      <>
        <Location>{this.state.profile.location}</Location>
        <Bio>{this.state.profile.bio ? this.state.profile.bio : ''}</Bio>
        <ProfileSection title='Instruments'>
          {
            this.state.profile.instruments.length > 0 ?
              this.state.profile.instruments
                .sort((a, b) => this.descProficiency(a, b))
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
          <MusicStyle value='blues'>Blues</MusicStyle>
        </ProfileSection>
      </>
    );
  }

}

export default Profile;