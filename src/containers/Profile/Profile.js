import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { find } from 'lodash';

import {users, profiles} from 'data';

const Location = styled.div`
  font-size: 0.9rem;
  margin-top: 10%;
  text-align: center;
`;

const Profile = ({profile, setProfile}) => {
  // const {username} = useParams();
  const user = users[0];
  setProfile( find(profiles, {user_id: user.id}) );

  return(
    <div>
      <Location>{profile.location}</Location>
      <Link to='/profile/edit'>Edit my profile</Link>
    </div>
  )
}

export default Profile;