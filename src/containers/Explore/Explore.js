import React from 'react';

import { Results } from './Explore.styles';

import Card from 'components/Card/Card';
import Instruments from 'components/Instruments/Instruments';

import Fetcher from 'utils/Fetcher';

const Explore = () => {
  return(
    <Fetcher request='//localhost:3004/users?_start=0&_end=10'>
      { ({ data }) => {
       return(
        <Results>
          {data.map(result => {
            return(
              <Card
                key={result.id}
                image={result.profile.picture}
                title={result.profile.display_name}
                url={`/profile/${result.username}`}
                urlLabel={`Go to ${result.profile.display_name}'s profile.`}
                text={result.profile.location}
                slot={<Instruments items={result.profile.instruments} />}
                rounded
              />
            )
          })}
        </Results>
       )
      } }
    </Fetcher>
  );
}

export default Explore;