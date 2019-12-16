import React, { useState } from 'react';
import { sampleSize, find } from 'lodash';

import { Results } from './Explore.styles';

import Card from 'components/Card/Card';
import Instruments from 'components/Instruments/Instruments';

import { users, profiles } from 'data';

const Explore = () => {
  const [results] = useState(sampleSize(users, 10));

  return(
    <>
      <h1>Explore</h1>
      <Results>
        {results.map(result => {
          // get the user profile
          const profile = find(profiles, {user_id: result.id});

          // display the Card
          return(
            <Card
              key={result.id}
              image={profile.picture}
              title={profile.display_name}
              url={`/profile/${result.username}`}
              urlLabel={`Go to ${profile.display_name}'s profile.`}
              text={profile.location}
              slot={<Instruments items={profile.instruments} />}
              rounded
            />
          )
        })}
      </Results>
    </>
  );
}

export default Explore;